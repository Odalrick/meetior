FROM ubuntu:latest
RUN apt-get update && apt-get install -y \
  npm
WORKDIR \app
