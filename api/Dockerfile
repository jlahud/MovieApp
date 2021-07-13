FROM python:alpine

WORKDIR /app

COPY Pipfile* ./

RUN pip install pipenv && pipenv install --system

COPY . .

EXPOSE 8000

CMD gunicorn --timeout 60 -w $((`nproc`*2+1)) -b 0.0.0.0:8000 "run:create_app()"
