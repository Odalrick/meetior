FROM klaemo/couchdb:latest
COPY local.ini /usr/local/etc/couchdb/
#couchdb-lucene
RUN echo "deb http://ppa.launchpad.net/webupd8team/java/ubuntu trusty main" > /etc/apt/sources.list.d/webupd8team-java.list \
  && echo "deb-src http://ppa.launchpad.net/webupd8team/java/ubuntu trusty main" >> /etc/apt/sources.list.d/webupd8team-java.list \
  && apt-key adv --keyserver keyserver.ubuntu.com --recv-keys EEA14886 \
  && echo oracle-java7-installer shared/accepted-oracle-license-v1-1 select true | /usr/bin/debconf-set-selections
RUN apt-get update && apt-get install -y oracle-java8-installer \
  maven2 \
  git
RUN git clone https://github.com/rnewson/couchdb-lucene.git
RUN cd couchdb-lucene \
  && mvn
WORKDIR /var/lib/couchdb/couchdb-lucene/target
RUN unzip couchdb-lucene-2.0.0-SNAPSHOT-dist.zip
WORKDIR /var/lib/couchdb/couchdb-lucene/target/couchdb-lucene-2.0.0-SNAPSHOT
#ENTRYPOINT ./bin/run
