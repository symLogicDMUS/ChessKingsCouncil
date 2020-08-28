FROM node:13.12.0-alpine as react-build
WORKDIR /app/react_frontend
COPY ./react_frontend/package.json ./
COPY ./react_frontend/package-lock.json ./
RUN mkdir src public
COPY ./react_frontend/src ./src
COPY ./react_frontend/public ./public
RUN npm install
RUN npm run-script build
RUN ls ./public


FROM python:3.8.2
WORKDIR /app/python_backend
ENV PYTHONPATH "${PYTHONPATH}:/app"
RUN pip install Flask
RUN pip install gunicorn
RUN pip install python-dotenv
RUN pip install firebase-admin
RUN pip install termcolor
ENV PORT 8080
COPY ./python_backend ./
RUN mkdir ./templates
COPY --from=react-build /app/react_frontend/public/index.html ./templates/index.html
RUN cat ./templates/index.html
CMD exec gunicorn --bind :$PORT --workers 1 --threads 8 app:app