FROM ubuntu:latest
RUN apt-get update && apt-get install -y \		
	git \
	nodejs \
	couchdb
	
RUN groupadd -r planck && useradd -m -r -g planck planck
USER planck
WORKDIR /home/planck

# Expose webpack and couchdb ports
EXPOSE 5984
EXPOSE 8080
	
# Create an image
# > docker build -t <repository>/<image>:<tag> <context>
# Run an image for the first time creates a container
# > docker run -t -i <image> /bin/bash
# To stop the container when attached
# > exit
# Just exit: CTRL + P + Q