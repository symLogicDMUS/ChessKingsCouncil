FROM node:13.12.0-alpine as build
RUN pwd
RUN ls .
WORKDIR /app/react_frontend
RUN pwd
RUN ls .
COPY ./react_frontend/package.json ./
RUN pwd
RUN ls .
COPY ./react_frontend/package-lock.json ./
RUN pwd
RUN ls .
RUN npm install
RUN pwd
RUN ls .
COPY ./react_frontend ./
RUN npm build
RUN pwd
RUN ls .

FROM python:3.7
RUN pwd
RUN ls .
WORKDIR /app/python_backend
RUN pwd
RUN ls .
ENV PYTHONPATH "${PYTHONPATH}:/app"
RUN pwd
RUN ls .
RUN pip install Flask gunicorn
RUN pwd
RUN ls .
ENV PORT 8080
RUN pwd
RUN ls .
COPY ./python_backend ./
RUN pwd
RUN ls .
COPY --from=build /app/react_frontend/src/ ./static/
RUN pwd
RUN ls .
CMD exec guicorn --bind :$PORT --workers 1 --threads 8 app:app
RUN pwd
RUN ls .
CMD python3 app/python_backend/app.py
