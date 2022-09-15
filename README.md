# Cool Bananas

## What is Cool Bananas?
Simply the best image captioning website ever!

## Where to look for the planning?
[Check out the Miro board!](https://miro.com/app/board/uXjVPaYXUUQ=/)

## After cloning what should I do?
```
npm install
git checkout -b <branchname>
npm run knex migrate:latest
npm run knex seed:run
npm run dev
```
Then have a look over the bare bones site and code to get a feel for it.

## Before Creating a Pull Request
Make sure there are no linting or testing errors.
```
npm run lint
npm run test
```

Additionally, to check you have written tests with good coverage.
```
npm run test:coverage
```

## 
<img src="https://cdn-icons-png.flaticon.com/512/2847/2847187.png" width="300">
<br>
<a href="https://www.flaticon.com/free-icons/banana" title="banana icons">Banana icons created by Freepik - Flaticon</a>


<<<<<<< Updated upstream
// Instructions for front-end
Create a client/apis/dashboard.js file for the request to the backend to get the captioned images.


Create a client/actions/dashboard.js file for the thunk (and simple action). The thunk will send the api request (created above) to get the captioned images and will dispatch the simple action to the reducer (created below) to save the captioned images to the redux state.

Create a client/reducers/dashboard.js file for your reducer.

Use the client/components/Dashboard.jsx component to dispatch the thunk (created above) and to display one captioned image at a time. The Dashboard should also include a way to scroll through the captioned images.

Note: The order of the displayed images should be randomized, this can be done at whichever step you think is best.
=======
Kim/Eli to do: 

As a user I would like to be able to view all images that match a certain tag. (Frontend)

Create a client/apis/tagged.js file for the request to the backend to get the captioned images for a specific tag.

Create a client/actions/tagged.js file for the thunk (and simple action). The thunk will send the api request (created above) to get the captioned images and will dispatch the simple action to the reducer (created below) to save the captioned images to the redux state.

Create a client/reducers/tagged.js file for your reducer.

Use the client/components/Tagged.jsx component to dispatch the thunk (created above). The thunk will have a tag word as an argument (can be hardcoded initially). Display all the captioned images from the resulting state.

Note: Currently the tagged route in App.jsx isn't using a parameter. Add a parameter and make use of the useParams() router hook to dynamically change the tag word in your thunk. The displayed images should change as the tag parameter in the URL changes.

Test all of the above.

<!-- NB: random image with ONE OF ITS CAPTIONS 
-need to add a join... this has been done for us refer to landing.js base db code off of that for the join
-routes landing.js contains random function

// code a get all function in the route to access all images via backend 
AND THEN FOR FRONT END  - render only one of them 

//for backend (nb server file already done, DO NOT TOUCH)
-route, server, db files 

1 X code function to access image / caption from data base 
  -internal API call to access image / caption seeds in DB 
2 X code randomiser function to access 
2.5 X code function to access multiple images / make sure no double ups 
3 X testing....
4. X As a user I would like to be able to see random captioned images from the database. (Backend)

Create any needed database functions. Use the server/db/dashboard.js file for these function(s). 

(Note: we don't want to just be getting one captioned image at a time, we will want to get multiple)

Create any needed backend routes. Use the server/routes/dashboard.js file for these routes.

Write tests for the above. -->
>>>>>>> Stashed changes
