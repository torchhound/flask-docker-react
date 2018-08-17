from pymongo import MongoClient
from flask import Flask
from flask_bcrypt import Bcrypt
import os

app = Flask(__name__)
bcrypt = Bcrypt(app)
client = MongoClient('mongodb://mongo:27017') # os.environ['DB_PORT_27017_TCP_ADDR'] mongodb://database:27017
db = client.main
users = db.users

def newUser(username, password):
  return {'username': username,
    'password': password}

def addUser(username, password):
  hashedPassword = bcrypt.generate_password_hash(password)
  return users.insert_one(newUser(username, hashedPassword)).inserted_id

def findUser(username, password):
  for user in users.find({'username': username}):
    if bcrypt.check_password_hash(user.password, password):
      return True
  return False