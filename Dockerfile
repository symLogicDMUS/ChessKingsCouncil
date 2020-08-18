

FROM node:13.12.0-alpine as build
WORKDIR /app/react_frontend
COPY ./react_frontend/package.json ./
COPY ./react_frontend/package-lock.json ./
RUN npm install
COPY ./react_frontend ./
RUN npm build

FROM python:3.7
WORKDIR /app/python_backend
ENV PYTHONPATH "${PYTHONPATH}:/app"

RUN pip install flask
RUN pip install gunicorn

COPY ./python_backend ./
COPY --from=build /app/react_frontend/src/ ./static/

CMD python3 app/python_backend/app.py