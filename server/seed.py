# from config import app
from app import app
from models import Squad, User, Post, db


def create_squads():
  squads = []

  squads.append(Squad(name='Sunday Sitdown', image='https://m.media-amazon.com/images/I/51+HNJBn0LL._SL500_.jpg', description='Conversations with Willie Geist and speical guests'))    
  squads.append(Squad(name='Armchair Expert', image='https://i.iheart.com/v3/url/aHR0cHM6Ly9tZWdhcGhvbmUuaW1naXgubmV0L3BvZGNhc3RzLzFmNmJmY2VjLTIyNzQtMTFlZS04ZWQxLTU3NTcxOTQ0ZDgyZi9pbWFnZS9Bcm1jaGFpcl9FeHBlcnRfLV9BX1Nwb3RpZnlfUG9kY2FzdC5qcGc_aXhsaWI9cmFpbHMtNC4zLjEmbWF4LXc9MzAwMCZtYXgtaD0zMDAwJmZpdD1jcm9wJmF1dG89Zm9ybWF0LGNvbXByZXNz?ops=fit(960%2C960)', description='Dax Shepard dishing adivce'))    
  squads.append(Squad(name='Don\'t Ask Tig', image='https://img.apmcdn.org/62790abdbd1ccfe17022faf1b235df1100d97628/square/77795b-20200622-don-t-ask-tig-podcast-tile.jpg', description='The adivce you shouldn\'t have asked for'))
  squads.append(Squad(name='We Can Do Hard Things', image='https://i.scdn.co/image/ab67656300005f1f31936fcc7887c8a10ba9af9d', description='Tune in for Inspiration when you need it'))

  return squads


def create_users():
  users = []

  users.append(User(username='Rachel', email='rachel@gmail.com')) 
  users.append(User(username='Mike', email='mike@gmail.com'))
  users.append(User(username='Sam', email='sam@gmail.com'))  
    
  return users


def create_posts():
  posts = []

  posts.append(Post(body="This podcast makes my day", x='x')) 
  posts.append(Post(body="Thank you for tackling hard things with us.", x='x')) 
  posts.append(Post(body="Never disappoints!!", x='x')) 
  posts.append(Post(body="Love it!", x='x')) 
  posts.append(Post(body="Love this pod!", x='x')) 
  posts.append(Post(body="always informative/ thought provoking.", x='x')) 
  posts.append(Post(body="Love ❤️ the pod.", x='x')) 
  posts.append(Post(body="You inspire me every time!!.", x='x')) 
  posts.append(Post(body="love this", x='x')) 
  posts.append(Post(body="Big love 🤙", x='x')) 
  posts.append(Post(body="Love this pod!", x='x')) 
  posts.append(Post(body="Keeping it real", x='x')) 
  
  return posts



if __name__ == "__main__":
  with app.app_context():
    print("clearing database...")
    Squad.query.delete()
    User.query.delete()
    Post.query.delete()

    print("seeding squads...")
    squads = create_squads()
    db.session.add_all(squads)
    db.session.commit()

    print("seeding users...")
    users = create_users()
    db.session.add_all(users)
    db.session.commit()

    print("seeding posts...")
    users = create_posts()
    db.session.add_all(posts)
    db.session.commit()

    print("Done seeding!")


# if __name__ == "__main__":
#   with app.app_context():

#     Squad.query.delete()
    
#     squads = []

#     squads.append(Squad(name='Sunday Sitdown', image='https://m.media-amazon.com/images/I/51+HNJBn0LL._SL500_.jpg', description='Conversations with Willie Geist and speical guests'))
    
#     squads.append(Squad(name='Armchair Expert', image='https://i.iheart.com/v3/url/aHR0cHM6Ly9tZWdhcGhvbmUuaW1naXgubmV0L3BvZGNhc3RzLzFmNmJmY2VjLTIyNzQtMTFlZS04ZWQxLTU3NTcxOTQ0ZDgyZi9pbWFnZS9Bcm1jaGFpcl9FeHBlcnRfLV9BX1Nwb3RpZnlfUG9kY2FzdC5qcGc_aXhsaWI9cmFpbHMtNC4zLjEmbWF4LXc9MzAwMCZtYXgtaD0zMDAwJmZpdD1jcm9wJmF1dG89Zm9ybWF0LGNvbXByZXNz?ops=fit(960%2C960)', description='Dax Shepard dishing adivce'))
    
#     squads.append(Squad(name='Don\'t Ask Tig', image='https://img.apmcdn.org/62790abdbd1ccfe17022faf1b235df1100d97628/square/77795b-20200622-don-t-ask-tig-podcast-tile.jpg', description='The adivce you shouldn\'t have asked for'))
    
#     squads.append(Squad(name='We Can Do Hard Things', image='https://i.scdn.co/image/ab67656300005f1f31936fcc7887c8a10ba9af9d', description='Tune in for Inspiration when you need it'))

#     db.session.add_all(squads)
#     db.session.commit()
 
