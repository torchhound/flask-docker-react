FROM tiangolo/uwsgi-nginx-flask:python3.6
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY ./Pipfile /app/Pipfile
RUN pip install --no-cache-dir pipenv
RUN pipenv install
COPY ./service /app
ENV LISTEN_PORT 4040
ENV DEBUG False
EXPOSE 4040
CMD [ "python", "./main.py" ]