# from config import app
from app import app
from models import Squad, db


if __name__ == "__main__":
  with app.app_context():

    Squad.query.delete()
    
    squads = []

    squads.append(Squad(name='Sunday Sitdown', image='https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png', description='Conversations with Willie Geist and speical guests'))
    squads.append(Squad(name='Armchair Expert', image='https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png', description='Dax Shepard dishing adivce'))
    squads.append(Squad(name='Don\'t Ask Tig', image='https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png', description='The adivce you shouldn\'t have asked for'))
    squads.append(Squad(name='We Can Do Hard Things', image='https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png', description='Tune in for Inspriation when you need it'))

    db.session.add_all(squads)
    db.session.commit()
 
