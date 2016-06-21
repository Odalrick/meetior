import co from 'co'
import R from 'ramda'
import util from 'util'
import {exec} from 'child_process'
   
const DB_NAME='planck-db'
const DB_IMAGE='planck/db'

const wrapExec = (cmd) => new Promise((resolve, reject) => {
  exec(cmd,
	(error, stdout, stderr) => {		
		if(error){
			console.log(R.assoc('stderr', stderr, error))
			reject(R.assoc('stderr', stderr, error))
		}
		resolve(stdout.trim().slice(1,-1))
	})  
  })  

const getContainerId = () => 
  wrapExec(`docker ps -f name=${DB_NAME} -a --format \'{{.ID}}\'`)	

const start = (id) => (id ? wrapExec(`docker start ${DB_NAME}`) :	
  wrapExec(`docker run -d -p 5984:5984 --name=${DB_NAME} ${DB_IMAGE}`))
	
const stop = (id) => wrapExec(`docker stop ${DB_NAME}`)
	
/*
push(){
  return
}
*/

//main
co(function*(){
	const id = yield getContainerId()	
	console.log(id)
	const cmd = process.argv[2]
	switch(cmd){
		case 'start': 
			yield start(id).then(() => console.log('Started db'))
			break
		case 'stop': 
			yield stop(id).then(() => console.log('Stopped db'))
			break
		default:
			console.log(`Unknown command: ${cmd}`)		
	}
  }).catch(onerror);

function onerror(err) {
  // log any uncaught errors
  // co will not throw any errors you do not handle!!!
  // HANDLE ALL YOUR ERRORS!!! 
  console.error(err);
}

