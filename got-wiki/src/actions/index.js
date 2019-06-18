export const fetchBooksBegin = () => ({
  type: 'FETCH_BOOKS_BEGIN'
});

export const fetchBooksSuccess = books => ({
  type: 'FETCH_BOOKS_SUCCESS',
  payload: { books }
});

export const fetchBooksFailure = error => ({
  type: 'FETCH_BOOKS_FAILURE',
  payload: { error }
});

export function fetchBooks() {
  return dispatch => {
    dispatch(fetchBooksBegin());
    return fetch("https://www.anapioficeandfire.com/api/books")
      .then(res => res.json())
      .then(json => {
        dispatch(fetchBooksSuccess(json));
        return json.books;
      })
      .catch(error => dispatch(fetchBooksFailure(error)));
  };
}