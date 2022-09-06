FROM node

WORKDIR /src/website

COPY ./package.json /src/website/
RUN npm install
COPY ./ /src/website/

RUN npm run build