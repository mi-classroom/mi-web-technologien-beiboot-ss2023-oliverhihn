FROM node:20-alpine

# RUN apk add --no-cache bash

RUN npm install --global http-server
RUN npm install --global ngrok

WORKDIR /site
ADD ./ /site

ARG AUTH_TOKEN
ENV AUTH_TOKEN=${AUTH_TOKEN}

RUN ngrok config add-authtoken ${AUTH_TOKEN}

RUN mkdir /scripts
RUN echo 'http-server --cors -p8080 /site &' >> /scripts/init.sh
RUN echo 'ngrok http 8080 --log stdout' >> /scripts/init.sh
CMD sh -c "sh /scripts/init.sh"
