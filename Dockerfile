# build environment
FROM node:13.12.0-alpine as react-build
WORKDIR /app
RUN mkdir public src
COPY ./app/src  ./src
COPY ./app/public  ./public
COPY ./app/package.json  ./
COPY ./app/package-lock.json  ./
RUN npm install
RUN npm run-script build


# server environment
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/configfile.template

COPY --from=react-build /app/build /usr/share/nginx/html

# because react-router  https://mherman.org/blog/dockerizing-a-react-app/
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

ENV PORT 8080
ENV HOST 0.0.0.0
EXPOSE 8080
CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"