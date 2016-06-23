# meetior
## Setting up your development environment

Install docker and docker-compose:
https://docs.docker.com/engine/installation/windows/
https://docs.docker.com/engine/installation/linux/ubuntulinux/

### db commands
To administrate the db image and the container the following commands
are at your disposal (npm run db <command>):
**start** - starts db
**stop** - stops db
**rm** - remove current containers
**commit** _tag_ - commit current containers, you will need to tag them. This
creates new images that can be pushed.
**push** _tag_ - push to docker hub, use tag to reference the images. See
commit in order to see how you create a new image.

See docker to learn more about images and containers.

To change which version of db runs with the start command you will need to change the
tags in docker.compose.yml.

