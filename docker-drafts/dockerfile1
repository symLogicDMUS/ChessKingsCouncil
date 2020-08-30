FROM node:13.12.0-alpine as react-build
WORKDIR /ChessKingsCouncil/react_frontend
COPY ./react_frontend/package.json ./
COPY ./react_frontend/package-lock.json ./
RUN mkdir public src
COPY ./react_frontend/public ./public
COPY ./react_frontend/src ./src
RUN npm install
RUN npm run-script build


FROM python:3.8.2
WORKDIR /ChessKingsCouncil/python_backend
ENV PYTHONPATH "${PYTHONPATH}:/app"
RUN pip install Flask
RUN pip install firebase-admin
RUN pip install gunicorn
RUN pip install termcolor
ENV PORT 8080
COPY ./python_backend ./
CMD exec gunicorn --bind :$PORT --workers 1 --threads 8 app:app