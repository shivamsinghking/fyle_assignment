export const SEARCH_URL = "https://openlibrary.org/search.json"
export const SUBJECT_URL = "https://openlibrary.org/subjects/"
export const localStorageTimeLimit = 12000;

export const booksPerPage = 10;
export const limitPerPage = 10;

export const booksActiveFields = [
  { field: "title", label: "Title and Sub Title", col: 1 },
  { field: "authors", label: "Authors", col: 2 },
  { field: "latest_publish_year", label: "Latest Publish Year", col: 3 },
  { field: "first_publish_year", label: "First Publish Year", col: 4 },
];

export const subjectActiveFields = [
  {field: 'title', label: 'Title and Sub Title', col: 1},
  {field: 'authors', label: 'Authors', col: 2},
  {field: 'first_publish_year', label: 'First Publish year', col: 3}
]