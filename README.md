# CS-499 Project
Capstone project that contains a program rewritten using the MEAN stack, with added security and CRUD functionality.

## Technologies

### Backend
- Mongoose
- Express
- jsonwebtoken
- bcrypt

### Frontend
- Angular
- Typescript
- Bootstrap

## Installation

Before you do anything, make sure that you have Git, Node.js, and MongoDB installed on your system.

You can clone this project by opening a terminal and running the command ``` git clone https://github.com/spencerrunde/CS499Project.git ```. This will create a local copy of the repository on your system.

Afterwards, open the project folder in VSCode. Start a new terminal, and run the command ``` cd backendServer ``` to move into the backend folder. Run ``` npm install ``` to install all the necessary dependencies. Finally, you can run ``` node app.js ``` to start the backend server.

Create a new terminal by pressing the + icon on the top right of the terminal. The process for the frontend is much the same. ``` cd frontendClient ``` to move into the frontend directory. Run ``` npm install ``` again to install all the necessary dependencies. ``` ng serve ``` will build and deploy the Angular frontend.

You can now navigate to http://localhost:4200/ to view the project!

## Usage

You will land on the register page. Choose any email and password you want, and it will be pushed into the Users database. Upon successfully registering your information, you will be taken to the login page.

Login with the same information you just used to register, and you will be granted full access to the app.

Here you can see the Animal Shelter Outcomes datatable. Your table will be completely empty to start, so go ahead and add a new entry! 

Fill in the form with whatever information you want, and hit Submit.

You will be taken back to the main page, and you can see the table has been updated with your new entry. You can edit or delete this entry if you wish by hitting the buttons to the right. 