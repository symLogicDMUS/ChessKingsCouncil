FROM python:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN pip install -r firebase-admin
RUN pip install -r gunicorn
RUN pip install -r Flask
RUN pip install -r termcolor

ENTRYPOINT [ "flask" ]
CMD ["run", "--host=0.0.0.0", "--port=5000"]
