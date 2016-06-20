#!/usr/bin/env bash

DB_NAME='planck-db'
DB_IMAGE='planck/db'

_getContainerId(){
  echo `docker ps -f name=${DB_NAME} -a --format '{{.ID}}'`
}

start(){
  PLANCK_DB=$(_getContainerId)
  if [[ ${PLANCK_DB} ]]
  then
    docker start ${PLANCK_DB}
  else
    docker run -d -p 5984:5984 --name=${DB_NAME} ${DB_IMAGE}
  fi
}

stop(){
  PLANCK_DB=$(_getContainerId)
  if [[ ${PLANCK_DB} ]]
  then
    docker stop ${PLANCK_DB};
  fi
}

push(){
  return
}

stop

