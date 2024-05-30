# About Podsquad
PodSquad is all about chatting with others about your favorite podcast.  A new user can Register to join Podsquad or login if the have already joined. Users can logout from the home page or toggle the theme from light to dark. Any user can create a new "podquad" by navigating to New Squad and filling in the form.  Only the creator of a "podsquad" can delete a "podsquad" by clicking on the "x" in the upper left corner of the podsquad card.

From the PodSquad page, the user can see all the existing PodSquads. The user can also click the "show posts" on any podSquad and it will display all user posts about that specific podcast (and all other podcasts will be hidden from view).  

From within a selected podsquad, if the current user is not a member of that podsquad, they can select to join the squad. If they are a member of that podsquad, they will be able to create a new post, edit any of their existing posts or delete their existing posts. They can also choose to leave the squad.  When they hit "hide posts" they will return to a view of all the squads.

From the "All my Posts" page, the user can show/hide all the posts they have made across all of the squads in one list.

If the user goes to the "Chatroom" they can turn on live chat and converse in real time with other users who are logged in to the chat.

A video to demo the page is located here:
****need new video
https://youtu.be/lTO3XAnjDVk

# Description
This project uses React and Vite on the front end and Flask, Python, SQLAlchemy, Flask-socketio on the backend.  The databases are:

   - Squads: A specific podcast
   - Users: People who login to interact with PodSquad
   - Posts: Comments made by users about a Squad (there is full CRUD for posts)
   - SquadUsers: Members of a specific Squad

One-to-many relationships:
   - Each User can have many Posts, each Post belongs to one user
   - Each Squad can have many Posts, each Post belongs to one squad

Many-to-many relationships:
   - Users can belong to many squads, and Squads can have many Users

This project implements useContext to allow users to toggle a light/dark theme throughout. It also implement Formik for validation on all forms.

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

My Phase 4 project, which was the first itteration:
https://youtu.be/lTO3XAnjDVk


Flatiron Chatterbox Lab:
https://github.dev/learn-co-curriculum/python-p4-adding-react-to-flask/tree/solution
which I used to support my messaging feed

Flatiron Video on Authentication:
https://base.flatironschool.com/resource-library/auth-part-1-fd86ead34f
Which I used to support Login/Logout

Flask documentation and Related Github:
https://medium.com/@adrianhuber17/how-to-build-a-simple-real-time-application-using-flask-react-and-socket-io-7ec2ce2da977

https://github.com/adrianhuber17/webSocket-App



# Author
This page was created by Kerry Guarino (kerryoncoding)