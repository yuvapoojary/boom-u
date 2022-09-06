FROM node

WORKDIR /api

COPY package*.json /api/
RUN npm install
COPY ./ /api/

CMD ["node", "server.js"]