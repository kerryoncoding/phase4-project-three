
from config import app

from flask import Flask, request, make_response, jsonify, session, abort
# from flask_cors import CORS
# from flask_migrate import Migrate
from models import Squad, User, Post, db


# app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# app.json.compact = False

# Secret Key issues... check config?
# app.secret_key = b'\xf7\x93\xedur\x9d\xa0\r\x9c\x84M\x16\x1d\xb5)\xad'

# CORS(app)
# migrate = Migrate(app, db)

# db.init_app(app)

# Home
@app.route('/')
def home():
    return '<h1> This is home </h1>'


# SQUADS  ###################################################
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

# POSTS ############################################# 
@app.route('/posts', methods=['GET', 'POST'])
def posts():
    if request.method == 'GET':
        posts = Post.query.all()

        response = make_response(
            jsonify([post.to_dict() for post in posts]),
           200,
        )

        # username = post.user.username
        # body = post.body

        # response = make_response(
        #     jsonify({'username': username, 'body': body}),
        #     200
        # )


    
    elif request.method == 'POST':
        data = request.get_json()
        post = Post(
            body=data['body'],
            squad_id=data['squad_id'],
            user_id=data['user_id']
        )

        db.session.add(post)
        db.session.commit()

        response = make_response(
            jsonify(post.to_dict()),
            201,
        )

    return response

# USERS #####################################
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



# LOGIN ###########################
@app.route('/login')
def post():
    user=User.query.filter_by(user=request.get_json()['username']).first()
    session['user_id'] = user.id
    # import ipdb; ipdb.set_trace()
    response = make_response(
        user.to_dict(),
        200
    )
    return response




# ############# Authorized?  ##################
@app.route('/authorized')
def get():
    user = User.query.filter_by(id=session.get('user_id')).first()
    if user:
        response = make_response(
            user.to_dict(),
            200
        )
        return response
    else:
        abort(401, "Unauthorized")






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