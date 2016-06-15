FROM ubuntu:latest
RUN apt-get update && apt-get install -y \
  sudo \
	git \
	nodejs \
	couchdb \
	npm
RUN sudo ln -s `which nodejs` /usr/bin/node
WORKDIR /opt/planck/

# Expose webpack and couchdb ports
EXPOSE 5984
EXPOSE 8080

