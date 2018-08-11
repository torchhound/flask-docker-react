# flask-docker-react

Dockerized Flask authentication microservice with Redis sessions, MongoDB user storage, and a React/Redux/UIkit front end served with Dockerized NGINX.

# Installing

`npm install`

`pipenv install`

# Dev

`npm run start`

`pipenv run python main.py`

# Prod

`docker build -f Dockerfile -t react-auth-prod .`

`docker run -it -p 80:80 --rm react-auth-prod`