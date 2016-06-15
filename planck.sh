docker rm planck
#For now on windows has to be under current user
SRC_DIR=/c/Users/mjnao/Projects 
docker run --name planck \
	-v $SRC_DIR:/home/planck/app \
	-P \
	-t -i mjnao/testimage:0.3 /bin/bash