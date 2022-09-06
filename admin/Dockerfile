FROM node

WORKDIR /src/admin

COPY ./package.json /src/admin/
RUN npm install
COPY ./ /src/admin/
# RUN npm run build
CMD [ "npm", "start"]

EXPOSE 3000