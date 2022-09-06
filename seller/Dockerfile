FROM node

WORKDIR /src/seller

COPY ./package.json /src/seller/
RUN npm install -f
COPY ./ /src/seller/
# RUN npm run build
CMD [ "npm", "start"]

EXPOSE 3000