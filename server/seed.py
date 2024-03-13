# from config import app
from app import app
from models import Squad, db


if __name__ == "__main__":
  with app.app_context():

    Squad.query.delete()
    
    squads = []

    squads.append(Squad(name='Sunday Sitdown', image='https://m.media-amazon.com/images/I/51+HNJBn0LL._SL500_.jpg', description='Conversations with Willie Geist and speical guests'))
    
    squads.append(Squad(name='Armchair Expert', image='https://i.iheart.com/v3/url/aHR0cHM6Ly9tZWdhcGhvbmUuaW1naXgubmV0L3BvZGNhc3RzLzFmNmJmY2VjLTIyNzQtMTFlZS04ZWQxLTU3NTcxOTQ0ZDgyZi9pbWFnZS9Bcm1jaGFpcl9FeHBlcnRfLV9BX1Nwb3RpZnlfUG9kY2FzdC5qcGc_aXhsaWI9cmFpbHMtNC4zLjEmbWF4LXc9MzAwMCZtYXgtaD0zMDAwJmZpdD1jcm9wJmF1dG89Zm9ybWF0LGNvbXByZXNz?ops=fit(960%2C960)', description='Dax Shepard dishing adivce'))
    
    squads.append(Squad(name='Don\'t Ask Tig', image='https://img.apmcdn.org/62790abdbd1ccfe17022faf1b235df1100d97628/square/77795b-20200622-don-t-ask-tig-podcast-tile.jpg', description='The adivce you shouldn\'t have asked for'))
    
    squads.append(Squad(name='We Can Do Hard Things', image='https://i.scdn.co/image/ab67656300005f1f31936fcc7887c8a10ba9af9d', description='Tune in for Inspiration when you need it'))

    db.session.add_all(squads)
    db.session.commit()
 
