FROM node as build-stage

# admin
WORKDIR /admin
COPY ./admin/package.json /admin/
RUN npm install
COPY ./admin /admin/
RUN npm run build

# website
WORKDIR /website
COPY ./website/package.json /website/
RUN npm install
COPY ./website /website/
RUN npm run build

# buyer
WORKDIR /buyer
COPY ./buyer/package.json /buyer/
RUN npm install -f
COPY ./buyer /buyer/
RUN npm run build

# recommender
WORKDIR /recommender
COPY ./seller/package.json /recommender/
RUN npm install -f
COPY ./seller /recommender/
RUN npm run build

# nginx 
FROM nginx:1.15

COPY nginx.conf /etc/nginx/conf.d/default.conf

# copy build files
COPY --from=build-stage /admin/build /build/admin/
COPY --from=build-stage /website/build /build/website/
COPY --from=build-stage /buyer/build /build/buyer/
COPY --from=build-stage /recommender/build /build/recommender/

EXPOSE 3000