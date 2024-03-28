
# Why is ForeignKey not recognized ?????

from flask_sqlalchemy import SQLAlchemy

from sqlalchemy.orm import relationship
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy import MetaData
from config import db


metadata = MetaData()

# is this okay? --NO
# db = SQLAlchemy(metadata=metadata)



# Join Table - many to many
user_squads = db.Table(
   'user_squads',
   metadata,
   db.Column('user_id', db.Integer, db.ForeignKey('users.id'), primary_key=True),
   db.Column('squad_id', db.Integer, db.ForeignKey('squads.id'), primary_key=True)
)



# user can have many posts (one to many)
class User(db.Model, SerializerMixin):
   __tablename__ = 'users'
   id = db.Column(db.Integer, primary_key=True)
   username = db.Column(db.String(25), nullable=False)
   email = db.Column(db.String(255), nullable=False)
   # Relationships:
   posts = db.relationship('Post', back_populates='user')
   squads = db.relationship('Squad', secondary=user_squads, back_populates='users')

   def __repr__(self):
      return f'<User: {self.username}, email: {self.email} >'



class Squad(db.Model, SerializerMixin):
   __tablename__ = 'squads'
   id = db.Column(db.Integer, primary_key=True)
   name = db.Column(db.String(25), nullable=False)
   image = db.Column(db.String)
   description = db.Column(db.String(200))
   # relationships:
   posts = db.relationship('Post', back_populates='squad')
   owner_user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
   users=db.relationship('User', secondary=user_squads, back_populates='squads')

   def __repr__(self):
      return f'<Squad: {self.name}, imageURL: {self.image}, description: {self.description}>'




# each post belongs to a user (one to many)
class Post(db.Model, SerializerMixin):
   __tablename__ = 'posts'

   id = db.Column(db.Integer, primary_key=True)
   body = db.Column(db.String)
   squad_id = db.Column(db.Integer, db.ForeignKey('squads.id'))
   user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
   # Relationships:
   user = db.relationship('User', back_populates='posts')
   squad = db.relationship('Squad', back_populates='posts')

   # add ser
   serialize_rules = (
      '-user.posts', '-squad.posts',
   )



   def __repr__(self):
      return f'< Message: {self.body} >'
