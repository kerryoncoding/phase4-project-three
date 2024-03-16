
from config import app

from flask import Flask, request, make_response, jsonify, session
from flask_cors import CORS
from flask_migrate import Migrate
from models import Squad, User, Post, db


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False
app.secret_key = b'\xf7\x93\xedur\x9d\xa0\r\x9c\x84M\x16\x1d\xb5)\xad'

CORS(app)
migrate = Migrate(app, db)

db.init_app(app)


@app.route('/')
def home():
    return '<h1> This is home </h1>'


# SQUADS 

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


@app.route('/squads/<int:id>', methods=['PATCH', 'DELETE'])
def squads_by_id(id):
    squad = Squad.query.filter_by(id=id).first()

    if request.method == 'PATCH':
        data = request.get_json()
        for attr in data:
            setattr(squad, attr, data[attr])
            
        db.session.add(squad)
        db.session.commit()

        response = make_response(
            jsonify(squad.to_dict()),
            200,
        )

    elif request.method == 'DELETE':
        db.session.delete(squad)
        db.session.commit()

        response = make_response(
            jsonify({'deleted': True}),
            200,
        )

    return response




@app.route('/users', methods=['POST'])
def create_user():
    form_json = request.get_json()
    new_user = User(
        username=form_json['name'],
        email=form_json['email'],
    )

    db.session.add(new_user)
    db.session.commit()
    session['user_id'] = new_user.id

    response = make_response(
        new_user.to_dict(),
        201,
    )

    return response


if __name__ == "__main__":
  app.run(port=5555, debug=True)



# USERS
# @app.route('/users', methods=['POST'])
# def squads():
#     if request.method == 'POST':
#         data = request.get_json()
#         new_user = User(
#             username=data['username'],
#             email=data['email'],
#         )

#         db.session.add(new_user)
#         db.session.commit()
#         session['user_id'] = new_user.id

#         response = make_response(
#             jsonify(new_user.to_dict()),
#             201,
#         )

#     return response