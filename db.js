import co from 'co'
import R from 'ramda'
import util from 'util'
import {exec, spawn, spawnSync} from 'child_process'

const DB_CONTAINER = 'planck-db'
const DB_LUCENE_CONTAINER = 'planck-lucene'
const DB_IMAGE = 'planck/db'
const DB_LUCENE_IMAGE = 'planck/db-lucene'

import DBfactory from './src/db/couch'
import docsDesign from './src/db/fixtures/docs.design'
import searchDesign from './src/db/fixtures/search.design'

const wrapExec = (cmd) => new Promise((resolve, reject) => {
  console.log(cmd)
  exec(cmd,
    (error, stdout, stderr) => {
      if (error) {
        reject(R.assoc('stderr', stderr, error))
      }
      const result = stdout && stdout[0] ==='\'' ? stdout.trim().slice(1, -1) : stdout
	  console.log(result)
	  resolve(result)
    })
})

const wrapSpawn = (cmd, params) => new Promise((resolve, reject) => {
  console.log(cmd, params.join(' '))
  const p = spawn(cmd, params, {stdio: 'inherit'});
  p.on('close', (code) => {
    resolve(code)
  });
  p.on('error', (code) => {
    reject(code)
  });
})

const getContainerId = (image, tag) => {
  return wrapExec(`docker ps -f ancestor=${image}${tag ? ':' + tag : ''} -a --format \'{{.ID}}\'`)
}

const login = () => {
  console.log('Authentication required!')
  return wrapSpawn('docker', ['login'])
}

// Commands
const start = function*(){
	let isRunning = yield getContainerId(DB_IMAGE, 'base')
	isRunning = yield getContainerId(DB_LUCENE_IMAGE, 'base')
	yield isRunning ? wrapExec(`docker-compose start`) :
		wrapSpawn(`docker-compose`, ['up', '-d' ])
}

const stop = () => wrapExec(`docker-compose stop`)

const rm = () => wrapSpawn('docker-compose', ['rm'])

const build = (tag) => {
  if (!tag) {
    throw 'You must provide a tag when building an image: \n\t usage: build <tag>'
  }
  //--no-cache
  return wrapSpawn('docker', ['build', '-t', `${DB_IMAGE}:${tag}`,'-f', 'db.Dockerfile', '.'])
	.then(() => wrapSpawn('docker', ['build', '-t', `${DB_LUCENE_IMAGE}:${tag}`,'-f', 'lucene.Dockerfile', '.']))
}

const commit = function*(tag){
  if (!tag) {
    throw 'You must provide a tag when committing: \n\t usage: commit <tag>'
  }
  const dbId = yield getContainerId(DB_IMAGE, 'base')
  const luceneId = yield getContainerId(DB_LUCENE_IMAGE, 'base')
  return wrapExec(`docker commit ${dbId} ${DB_IMAGE}:${tag}`)
	.then(wrapExec(`docker commit ${luceneId} ${DB_LUCENE_IMAGE}:${tag}`))
}

const push = function*(tag) {
  if (!tag) {
    throw 'You must provide a tag when pushing to docker hub: \n\t usage: push <tag>'
  }
  yield login()
  yield wrapExec(`docker push ${DB_IMAGE}:${tag}`)
	  .then(() => wrapExec(`docker push ${DB_LUCENE_IMAGE}:${tag}`))
}

//TODO: Broken needs to know db
const update = function*() {
  const log = (req) => {
    console.log(`status ${req.status} ${req.url}`)
    if (req.status >= 400) {
      req.json().then(console.log)
    }
    return req
  }

  const db = DBfactory(config)

  const getRev = function*(doc){
    const loadedDoc = yield db.load(doc._id)
    return loadedDoc ? loadedDoc._rev : null
  }

  const updateDoc = function*(doc, functionExpressions){
    const rev = yield getRev(doc)
    if(rev) {
      doc._rev = rev
    }
    log(yield db.save(doc, functionExpressions))
  }

  yield updateDoc(docsDesign)
  yield updateDoc(searchDesign, false)
}

//main
co(function*() {
  const cmd = process.argv[2]
  const tag = process.argv[3]
  switch (cmd) {
    case 'start':
      yield start()
      break
    case 'stop':
      yield stop()
      break
    case 'rm':
      yield rm()
      break
    case 'build':
      yield build(process.argv[3])
      break
    case 'commit':
      yield commit(process.argv[3])
      break
    case 'push':
      yield push(process.argv[3])
      break
    case 'update':
      yield update()
      break
    default:
      console.log(`Unknown command: ${cmd}`)
  }
}).catch(onerror);

function onerror(err) {
  // log any uncaught errors
  // co will not throw any errors you do not handle!!!
  // HANDLE ALL YOUR ERRORS!!!
  console.error(err && err.stderr || err);
}

