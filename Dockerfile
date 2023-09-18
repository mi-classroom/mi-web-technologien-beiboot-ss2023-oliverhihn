FROM node:20-alpine

# RUN apk add --no-cache bash

RUN npm install --global webpack-cli webpack ngrok

WORKDIR /site
ADD ./ /site
RUN npm install

ARG AUTH_TOKEN
ENV AUTH_TOKEN=${AUTH_TOKEN}
ENV NODE_OPTIONS=--openssl-legacy-provider

RUN ngrok config add-authtoken ${AUTH_TOKEN}

RUN mkdir /scripts
RUN echo 'npm run dev &' >> /scripts/init.sh
RUN echo 'ngrok http 8000 --log stdout' >> /scripts/init.sh
CMD sh -c "sh /scripts/init.sh"
