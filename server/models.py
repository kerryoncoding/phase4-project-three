
# Why is ForeignKey not recognized ?????

from flask_sqlalchemy import SQLAlchemy

from sqlalchemy.orm import relationship
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy import MetaData
from config import db


metadata = MetaData()

# is this okay? --NO
# db = SQLAlchemy(metadata=metadata)

class Squad(db.Model, SerializerMixin):
   __tablename__ = 'squads'
   id = db.Column(db.Integer, primary_key=True)
   name = db.Column(db.String(25), nullable=False)
   image = db.Column(db.String)
   description = db.Column(db.String(200))
   owner_user_id = db.Column(db.Integer, db.ForeignKey("users.id"))

   def __repr__(self):
      return f'<Squad: {self.name}, imageURL: {self.image}, description: {self.description}>'


# user can have many posts (one to many)
class User(db.Model, SerializerMixin):
   __tablename__ = 'users'
   id = db.Column(db.Integer, primary_key=True)
   username = db.Column(db.String(25), nullable=False)
   email = db.Column(db.String(255), nullable=False)
   posts = db.relationship("Post", back_populates="user")


   def __repr__(self):
      return f'<User: {self.username}, email: {self.email} >'

# each post belongs to a user (one to many)
class Post(db.Model, SerializerMixin):
   __tablename__ = 'posts'

   id = db.Column(db.Integer, primary_key=True)
   body = db.Column(db.String)
   squad_id = db.Column(db.Integer, db.ForeignKey("squads.id"))
   user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
   user = relationship("User", back_populates="posts")
   
   
   # created_at = db.Column(db.DateTime, server_default=db.func.now())
   # updated_at = db.Column(db.DateTime, onupdate=db.func.now())

   def __repr__(self):
      return f'< Message: {self.body}, {self.id} >'

