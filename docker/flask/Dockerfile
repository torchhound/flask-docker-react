FROM python:3
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY ../../Pipfile /app/Pipfile
RUN pip install --no-cache-dir -p Pipfile
COPY ../../service /app
EXPOSE 4040
CMD [ "python", "./main.py" ]