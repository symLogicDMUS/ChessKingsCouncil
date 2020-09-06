# first building react project, using node base image
FROM node:latest as build-stage

# setting working dir inside container
WORKDIR /react_frontend

# required to install packages
COPY package.json ./
COPY package-lock.json ./

# installing npm packages
RUN npm install

# copying over react source material
COPY ./src ./src

# copying over further react material
COPY ./public ./public

# copying over our nginx config file
COPY ./nginx/additional_container_server.conf ./

# creating production build to serve through nginx
RUN npm run build

# starting second, nginx build-stage
FROM nginx:latest

# removing default nginx config file
# RUN rm /etc/nginx/conf.d/default.conf

# copying our nginx config
COPY --from=build-stage /react_frontend/additional_container_server.conf /etc/nginx/conf.d/

# copying production build from last stage to serve through nginx
COPY --from=build-stage /react_frontend/build/ /usr/share/nginx/html

# because use React Router (search Dockerizing React App)
COPY ./nginx/additional_container_server.conf /etc/nginx/conf.d/default.conf

# exposing port 8080 on container
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]