FROM readytalk/nodejs
VOLUME /tmp/planck
WORKDIR /tmp/planck
RUN git clone https://github.com/Odalrick/meetior.git
RUN npm install
