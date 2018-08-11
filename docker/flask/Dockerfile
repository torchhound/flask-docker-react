FROM python:3
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY ../../requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -r requirements.txt
COPY ../../service /app
EXPOSE 4040
CMD [ "python", "./main.py" ]