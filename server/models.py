from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy import MetaData
from config import db


metadata = MetaData()

# db = SQLAlchemy(metadata=metadata)

class Squad(db.Model, SerializerMixin):
   __tablename__ = 'squads'
   id = db.Column(db.Integer, primary_key=True)
   name = db.Column(db.String(25), nullable=False)
   image = db.Column(db.String)
   description = db.Column(db.String(200))

   def __repr__(self):
      return f'<Squad: {self.name}, imageURL: {self.image}, description: {self.description}>'


class User(db.Model, SerializerMixin):
   __tablename__ = 'users'
   id = db.Column(db.Integer, primary_key=True)
   username = db.Column(db.String(25), nullable=False)
   email = db.Column(db.String, nullable=False)


   def __repr__(self):
      return f'<User: {self.username}, email: {self.email} >'


class Post(db.Model, SerializerMixin):
   __tablename__ = 'messages'

   id = db.Column(db.Integer, primary_key=True)
   body = db.Column(db.String)
   username = db.Column(db.String)
   created_at = db.Column(db.DateTime, server_default=db.func.now())
   updated_at = db.Column(db.DateTime, onupdate=db.func.now())

   def __repr__(self):
      return f'<Message by {self.username}: {self.body[:10]}...>'

