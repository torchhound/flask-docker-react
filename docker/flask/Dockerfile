FROM tiangolo/uwsgi-nginx-flask:python3.6
COPY ./Pipfile /app/Pipfile
RUN pip install --no-cache-dir pipenv
RUN export PIPENV_VENV_IN_PROJECT=1
RUN pipenv install
COPY ./service /app
# CMD ["uwsgi", "-H", ".venv"]