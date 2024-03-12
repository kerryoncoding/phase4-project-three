
from config import app, db
from flask import Flask, request, make_response, jsonify
from flask_cors import CORS
from flask_migrate import Migrate
from models import Squad


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

CORS(app)
migrate = Migrate(app, db)

db.init_app(app)


@app.route('/')
def home():
    return '<h1> This is home </h1>'

@app.route('/squads', methods=['GET', 'POST'])
def squads():
    if request.method == 'GET':
        squads = Squad.query.all()

        response = make_response(
            jsonify([squad.to_dict() for squad in squads]),
            200,
        )
    
    elif request.method == 'POST':
        data = request.get_json()
        squad = Squad(
            name=data['name'],
            image=data['image'],
            description=data['description']
        )

        db.session.add(squad)
        db.session.commit()

        response = make_response(
            jsonify(squad.to_dict()),
            201,
        )

    return response


if __name__ == "__main__":
  app.run(port=5555, debug=True)
