from config import app, db
from flask_migrate import Migrate


migrate = Migrate(app, db)



@app.route('/')
def home():
    return '<h1> This is home </h1>'

@app.route('/squads', methods=['GET'])
def squads():
    return '<h1> this is squads</h1>'


if __name__ == "__main__":
  app.run(port=5555, debug=True)
