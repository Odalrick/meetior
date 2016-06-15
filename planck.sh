#!/usr/bin/env bash
docker rm -f planck
#For now on windows has to be under current user
SRC_DIR={$PWD}
sudo docker run --name planck \
	-v /home/magnus/Projects/planck:/opt/planck/ \
	-p 5987:5984 \
	-t -i planck/dev:latest /bin/bash
