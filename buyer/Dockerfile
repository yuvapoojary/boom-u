FROM node

WORKDIR /src/buyer

COPY ./package.json /src/buyer/
RUN npm install -f
COPY ./ /src/buyer/
# RUN npm run build
CMD [ "npm", "start"]

EXPOSE 3000