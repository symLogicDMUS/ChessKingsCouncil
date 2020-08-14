

FROM node:13.12.0-alpine as build
WORKDIR /app/react_frontend
COPY ./react_frontend/package.json ./
COPY ./react_frontend/package-lock.json ./
RUN yarn install
COPY ./react_frontend ./
RUN yarn build

FROM python:3.7
WORKDIR /app/python_backend
ENV PYTHONPATH "${PYTHONPATH}:/app"

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY ./python_backend ./
COPY --from=build /app/react_frontend/dist/ ./static/

CMD python3 app/python_backend/app.py