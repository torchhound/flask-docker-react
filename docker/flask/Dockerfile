FROM tiangolo/uwsgi-nginx-flask:python3.6
COPY ./Pipfile /app/Pipfile
RUN pip install --no-cache-dir pipenv
RUN pipenv install
COPY ./service /app
ENV DEBUG False
CMD [ "pipenv", "run", "python" ,"./main.py" ]