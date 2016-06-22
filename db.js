import co from 'co'
import R from 'ramda'
import util from 'util'
import {exec, spawn, spawnSync} from 'child_process'

const DB_CONTAINER = 'planck-db'
const DB_IMAGE = 'planck/db'
const DB_DEFAULT_TAG = process.env.npm_package_config_db_tag

const wrapExec = (cmd) => new Promise((resolve, reject) => {
  console.log(cmd)
  exec(cmd,
    (error, stdout, stderr) => {
      if (error) {
        reject(R.assoc('stderr', stderr, error))
      }
      console.log(stdout)
      resolve(stdout.trim().slice(1, -1))
    })
})

const wrapSpawn = (cmd, params) => new Promise((resolve, reject) => {
  console.log(cmd)
  const p = spawn(cmd, params, {stdio: 'inherit'});
  p.on('close', (code) => {
    resolve(code)
  });
  p.on('error', (code) => {
    reject(code)
  });
})

const getContainerId = (tag) =>
  wrapExec(`docker ps -f name=${DB_CONTAINER} -f ancestor=${DB_IMAGE}:${tag} -a --format \'{{.ID}}\'`)

const login = () => {
  console.log('Authentication required!')
  return wrapSpawn('docker', ['login'])
}

// Commands
const start = (id, tag) => (id ? wrapExec(`docker start ${DB_CONTAINER}`) :
  wrapExec(`docker run -d -p 5984:5984 --name=${DB_CONTAINER} ${DB_IMAGE}:${tag}`))

const stop = (id) => wrapExec(`docker stop ${id}`)

const rm = (id) => {
  if (!id) {
    throw `No ${DB_CONTAINER} container to remove`
  }
  return wrapExec(`docker rm ${id}`)
}

const commit = (id, tag) => {
  if (!tag) {
    throw 'You must provide a tag when committing a container: \n\t usage: commit <tag>'
  }
  wrapExec(`docker commit ${id} ${DB_IMAGE}:${tag}`)
}

const push = function*(id, tag) {
  if (!tag) {
    throw 'You must provide a tag when pushing to docker hub: \n\t usage: push <tag>'
  }
  yield login()
  yield wrapExec(`docker push ${DB_IMAGE}:${tag}`)
}

//main
co(function*() {
  const cmd = process.argv[2]
  const tag = process.argv[3]
  const id = yield getContainerId(tag)
  switch (cmd) {
    case 'start':
      yield start(id, process.argv[3] || DB_DEFAULT_TAG)
      break
    case 'stop':
      yield stop(id, process.argv[3] || DB_DEFAULT_TAG)
      break
    case 'rm':
      yield rm(id)
      break
    case 'commit':
      yield commit(id, process.argv[3])
      break
    case 'push':
      yield push(id, process.argv[3])
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

