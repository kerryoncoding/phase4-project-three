# About Podsquad
PodSquad is all about chatting with others about your favorite podcast.  A new user can Register to join Podsquad or login if the have already joined. Users can logout from the home page or the podsquad page. Any user can create a new "podquad" by navigating to New Squad and filling in the form.  Any user can delete a "podsquad" by clicking on the "x" in the upper left corner of the podsquad card.

From the PodSquad page, the user can see all the existing PodSquads. The user can also click the "show posts" on any podSquad and it will display all posts that have been made about that specific podcast (and hide other podcasts from view).  

From within a selected podsquad, if the current user is not a member of that podsquad, they can select to join the squad. If they are a member of that podsquad, they will be able to create a new post, edit any of their existing posts or delete their existing posts. They can also choose to leave the squad.  When they hit "hide posts" they will return to a view of all the squads.


# Description
This project uses React and Vite on the front end and Flask, Python, SQLAlchemy on the backend.  The databases are:

   - Squads: A specific podcast
   - Users: People who login to interact with PodSquad
   - Posts: Comments made by users about a Squad
   - SquadUsers: Members of a specific Squad

One-to-many relationships:
   - Each User can have many Posts, each Post belongs to one user
   - Each Squad can have many Posts, each Post belongs to one squad

Many-to-many relationships:
   - Users can belong to many squads, and Squads can have many Users

# Installation
- Run "pipenv install && pipenv shell" 
- Navagate into the server directory and seed the database with "python seed.py"
- Run the backend with "python app.py
- from a new terminal, navagate into the client directory
- run "npm run dev" and open the page


# Giving thanks to...

https://github.com/Enoch2k2/flatiron-flask-project-generator
Enoch for providing a started template for Phase 4 final project

https://github.dev/briancodex/react-sidebar-router-v6.4
for assiting with sidebar code

My Phase 2 final project for Flatiron:
https://github.com/kerryoncoding/engineering-portfolio
which I used to leverage frontend react design and css styling

Flatiron Chatterbox Lab:
https://github.dev/learn-co-curriculum/python-p4-adding-react-to-flask/tree/solution
which I used to support my messaging feed

Flatiron Video on Authentication:
https://base.flatironschool.com/resource-library/auth-part-1-fd86ead34f
Which I used to support Login/Logout


# Author
This page was created by Kerry Guarino (kerryoncoding)