FROM tiangolo/uwsgi-nginx-flask:python3.6
ENV UWSGI_INI /app/uwsgi.ini
COPY ./Pipfile /app/Pipfile
RUN pip install --no-cache-dir pipenv
ENV PIPENV_VENV_IN_PROJECT 1
RUN pipenv install
COPY ./service /app