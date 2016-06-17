FROM ubuntu:trusty
RUN apt-get update && apt-get install -y \
  curl
RUN curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
RUN apt-get install -y nodejs
WORKDIR \app
