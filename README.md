# Getting Started Open Library Web 

## Available Scripts
In the project directory, you can run:
### `npm install  or yarn install`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

# Api dependencies - 
1. SEARCH_URL = "https://openlibrary.org/search.json" [ Get data of books, author, publishers etc. but author Name or book Name ]
2. SUBJECT_URL = "https://openlibrary.org/subjects/<subject_name>.json" [ Get books related to particular subject ]
These are open source REST API's for getting data related to books.

# Features Implemented
1. Resuable Components -> Pagination, Table, Search, Form Input 
2. Caching api response using local storage, having an expiry time limit
3. React routing => 1. " / " , 2. " /:subject "
