# meetior
## Setting up your development environment

Install docker:
https://docs.docker.com/engine/installation/windows/
https://docs.docker.com/engine/installation/linux/ubuntulinux/

### db commands
To administrate the db image and the container the following commands
are at your disposal (npm run db <command>):
**start** - starts db (the db starts with webpack normally)
**stop** - stops db
**rm** - remove current container
**commit** _tag_ - commit current container, you will need to tag it. This
creates a new image that can be pushed.
**push** _tag_ - push to docker hub, use tag to reference an image. See
commit in order to see how you create a new image.

See docker to learn more about images and containers.

To change which version of db runs with webpack you will need to change the
tag in package.json under the config key.

### If you want to try docker-compose
I don't think we'll keep this but I'll keep it for a while.

To init environment (be patient can take several minutes for each command):
docker-compose -f docker-compose-init.yml --verbose up

To init/reset data :
docker-compose -f docker-compose-init.yml run setup npm run db:reset http://planck-db:5984

To start the dev environment:
docker-compose up -d

See docker and docker-compose for more options.

NOTE! In windows you need to have the project under the current users folder i.e C:\Users\...
