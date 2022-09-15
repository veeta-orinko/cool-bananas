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


// Instructions for front-end
Create a client/apis/dashboard.js file for the request to the backend to get the captioned images.


Create a client/actions/dashboard.js file for the thunk (and simple action). The thunk will send the api request (created above) to get the captioned images and will dispatch the simple action to the reducer (created below) to save the captioned images to the redux state.

Create a client/reducers/dashboard.js file for your reducer.

Use the client/components/Dashboard.jsx component to dispatch the thunk (created above) and to display one captioned image at a time. The Dashboard should also include a way to scroll through the captioned images.

Note: The order of the displayed images should be randomized, this can be done at whichever step you think is best.