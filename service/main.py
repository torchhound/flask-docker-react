from flask import Flask, session, jsonify, abort, request
from flask_session import Session
from flask_jwt_extended import JWTManager, create_access_token, get_jwt_identity
from os import getenv
from redis import from_url
from functools import wraps
from user import findUser, addUser

app = Flask(__name__)
Debug = getenv('DEBUG', True)
SESSION_TYPE = 'redis'
app.config['SESSION_REDIS'] = from_url('http://session:6379')
app.config.from_object(__name__)
Session(app)
app.config['JWT_SECRET_KEY'] = getenv('JWT_SECRET', 'highest-clearance')
jwt = JWTManager(app)

def nullCheck(fn):
  @wraps(fn)
  def check(*args, **kws):
    data = request.get_json()
    if not data or not data.get('username') or not data.get('password'):
      abort(400)
    return fn(*args, **kws)
  return check

@app.route('/auth/register', methods=['POST'])
@nullCheck
def register():
  data = request.get_json()
  username = data.get('username')
  access_token = create_access_token(identity=username)
  session['username'] = access_token
  addUser(username, data.get('password'))
  return jsonify(status = 'User successfully created!', token = access_token)

@app.route('/auth/login', methods=['POST'])
@nullCheck
def login():
  data = request.get_json()
  username = data.get('username')
  access_token = create_access_token(identity=username)
  if findUser(username, data.get('password')):
    return jsonify({'status': 'User successfully logged in!', 'token': access_token})
  else:
    return jsonify(status = 'User login unsuccessful...')  

@app.route('/auth/logout', methods=['POST'])
def logout():
  data = request.get_json()
  if not data or not data.get('username'):
    abort(400)
  session.pop(data.username, None)
  return jsonify(status = 'User successfully logged out!')

@app.route('/auth/refresh', methods=['POST'])
def refresh():
  currentUser = get_jwt_identity()
  newToken = create_access_token(identity=currentUser, fresh=False)
  return jsonify(status = 'User token refresh successful!', token = newToken)

@app.errorhandler(404)
def not_found(error):
  return abort(404)

if __name__ == '__main__':
  app.run(debug=Debug, host='0.0.0.0', port=80)