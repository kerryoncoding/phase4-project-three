from flask import Flask
from flask_socketio import SocketIO


app = Flask(__name__)
socketio = SocketIO(app)

@app.route('/')
def home():
    return 'Hello, Flask and SocketIO!'

if __name__ == '__main__':
    socketio.run(app, debug=True)