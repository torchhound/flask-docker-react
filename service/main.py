from flask import Flask, session, make_response, jsonify, abort, request
from flask.ext.session import Session
import user

app = Flask(__name__)
SESSION_TYPE = 'redis' #switch to external dockerized redis so other services can access
app.config.from_object(__name__)
Session(app)

def nullCheck(fn):
  @functools.wraps(fn)
  def check(*args, **kws):
    data = request.get_json()
    if not data or not 'username' or 'password' in data:
      abort(400)
  return check
     
@app.route('/auth/signup', methods=['POST'])
@nullCheck
def signup():
  session['username'] =  #auth token
  return make_response(jsonify({'status': 'User successfully created!'}), 200)

@app.route('/auth/login', methods=['POST'])
@nullCheck
def login():
  return session.get('key', 'not set')

@app.route('/auth/logout', methods=['GET'])
def logout():
  data = request.get_json()
  if not data or not 'username' in data:
    abort(400)
  session.pop(data.username, None)
  return make_response(jsonify({'status': 'User successfully logged out!'}), 200)

@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=4040)