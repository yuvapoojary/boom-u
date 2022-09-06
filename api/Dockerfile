FROM node

WORKDIR /src/api

COPY package*.json /src/api/
RUN npm install
COPY ./ /src/api/

CMD ["node", "server.js"]