# Project Sticky | [LIVE](https://project-sticky.herokuapp.com/)

To locally run this app, run npm run dev at root directory and npm start in frontend folder.

## About 
Project Sticky is an app inspired by the need for project management. By the name project sticky, we hope people can stick to the plan and finish their projects on time. A virtual representation of the progress will make our app more entertaining and practical for people to notice where they are at in the project timeline, as well as if they are on track or behind.

## Technologies
* MongoDB
* Node.js
* Express.js
* React.js
* Redux.js


## Features

### Splash Page
* Create a splash page with anmiation and help us to build excitement for our brand
![Screen Shot 2022-10-05 at 3 42 38 AM](https://user-images.githubusercontent.com/107185169/194043340-297f4bba-a887-4d2e-a33b-5f59f1433aff.png)

### User Authentication
* User authenticaiton is implemented on both frontend and backend. Presence validations and uniqueness contraints (for username and email) are enforced in models and database. Upon a successful signup, the password is hashed using BCrypt and saved to the database as a password digest.
* Users can sign up, log in, and log out of their accounts; they will stay logged in after leaving the page.
![Screen Shot 2022-10-05 at 3 49 38 AM](https://user-images.githubusercontent.com/107185169/194043497-56f9ec7c-9b36-4b3a-b3d7-37dd34ca0a31.png)

### Projects (Create, Read, Update, Delete)
* All user's porjects are showing in the homepage.
* Using create button to create a project with title, description, and deadline.
* Editing and deleting project by edit button and delete button.
* Clicking on the project card to see all the tasks belong to this project.
![Screen Shot 2022-10-05 at 3 50 27 AM](https://user-images.githubusercontent.com/107185169/194043635-531158c0-746c-442b-b09d-979979877ee7.png)

### Tasks (Create, Read, Update, Delete)
* Tasks - Create, Read, Update, and Delete. Includes sorting upon completion of tasks
![Screen Shot 2022-10-05 at 3 51 27 AM](https://user-images.githubusercontent.com/107185169/194043841-762a8536-e26e-4d51-9d57-398f68c3011f.png)
![Screen Shot 2022-10-05 at 3 51 52 AM](https://user-images.githubusercontent.com/107185169/194043884-a762ea86-8ade-49d2-bc13-52995b8c3360.png)

### Projects and Tasks Organization
* Organization - shows total tasks and their priority level.
* Show all projects and their respective deadlines.
* Move projects to completed pages when progress reaches 100%
![Screen Shot 2022-10-05 at 3 54 06 AM](https://user-images.githubusercontent.com/107185169/194044415-97ce27f0-2427-4434-9f13-d40066afc699.png)
![Screen Shot 2022-10-05 at 3 51 52 AM](https://user-images.githubusercontent.com/107185169/194044174-ed4b1274-b256-4689-b1a2-0bd4d5b72ad1.png)
![Screen Shot 2022-10-05 at 3 54 52 AM](https://user-images.githubusercontent.com/107185169/194044517-bda79fbb-4d7f-4bbb-b9d4-bff06ba96f7e.png)

### User Page
* In the user page can see the username and email address.
![Screen Shot 2022-10-05 at 3 55 26 AM](https://user-images.githubusercontent.com/107185169/194044595-b3ccf603-3335-46cf-a8f0-ca079c931ba7.png)



## Difficulties
* Learning new technical skills like Express.js, MongoDB.
* Lacking communication between team members. In the early stage of the project, it often appears to do duplicate things. 
* Learning how to improve the quality of communcaiton and rationalize each person's work.
* Managing git workflow to maintain smooth teamwork. Often run into conflicts that will take large amount of time to debug


