# Movies-app React

The project aims to create a web application called "yoonflix" that allows users to manage and share movies.

## The project was built using the following technologies:

- React
- Material UI
- mongoose
- MongoDB
- joi
- axios
- jwt-decode
- react-router-dom
- Express Server
- nodeJS

## Running the Project

To run the project, follow these steps:

1. to download the project use git clone or Extract the folder from the provided zip file and after Navigate to the extracted project folder .
2. Open the project in your preferred code editor in the client side and in the server side.
3. Install the required packages in the client side by running the command `npm install`.
4. start the client side: using the command `npm start`
5. Start the server side by running the command `npm run dev`
6. Make sure that the data base was created in the mongodb, and import the JSON files to the collections
7. Welcome! access the application in your web browser at http://localhost:3000.

## User Interface

The user interface of the movies site has the following features:

1. When the user is will connect, the signup and login links will change to Avatar picture. And the favoriets link will be added that will lead to the cards page
   Favorites of the surfer.
2. If the user is a business user type, a link called "MY MOVIES" will be added to the navigation bar. Clicking on it will lead to the movies page that the user created.
3. If the user is of the admin type he can create edit and delete all the movies in the site.

## Permissions

The permissions for different user types are as follows:

1. A user who is not logged in can only can use the about page.
2. A logged-in user that is not a business-type or admin can see movie and mark a movie as preferred.
3. A logged-in user that is a business type can see the "Edit" and "Delete" icons only for the movies he has created. He can edit and delete only his own movies.
4. An admin-type user can edit and delete any movie .

## Contact

If you have a question about the project - I'd love to be in touch! my email: yonatantaub36@gmail.com
