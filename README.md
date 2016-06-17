# meetior
## Setting up your development environment

Install docker:
https://docs.docker.com/engine/installation/windows/
https://docs.docker.com/engine/installation/linux/ubuntulinux/

To init environment (be patient can take several minutes for each command):
docker-compose -f docker-compose-init.yml --verbose up

To init/reset data :
docker-compose -f docker-compose-init.yml run setup npm run db:reset http://planck-db:5984

To start the dev environment:
docker-compose up -d

See docker and docker-compose for more options.

NOTE! In windows you need to have the project under the current users folder i.e C:\Users\...
