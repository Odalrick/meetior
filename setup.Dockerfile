FROM ubuntu:trusty
RUN apt-get update && apt-get install -y \
  nodejs \
  build-essential
WORKDIR \app
