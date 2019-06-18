
// Actions : Fetch all books
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

// Actions : Get one book by id
export const getBookBegin = () => ({
  type: 'GET_BOOK_BEGIN'
});

export const getBookSuccess = book => ({
  type: 'GET_BOOK_SUCCESS',
  payload: { book }
});

export const getBookFailure = error => ({
  type: 'GET_BOOK_FAILURE',
  payload: { error }
});

// Actions : Fetch all characters from book
/*export const getCharacterBegin = () => ({
  type: 'GET_CHARACTER_BEGIN'
});

export const getCharacterSuccess = character => ({
  type: 'GET_CHARACTERS_SUCCESS',
  payload: { character }
});

export const getCharacterFailure = error => ({
  type: 'GET_CHARACTER_FAILURE',
  payload: { error }
});*/

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

export function getBook(id) {
  return dispatch => {
    dispatch(getBookBegin());
    return fetch(`https://www.anapioficeandfire.com/api/books/${id}`)
      .then(res => res.json())
      .then(json => {
        dispatch(getBookSuccess(json));
        json.charactersc = [];
        json.characters.map(url => {
          return fetch(url)
            .then(res2 => res2.json())
            .then(json2 => {
              json.charactersc.push(json2);
              return json;
            });
          // .catch(error => dispatch(getCharacterFailure(error)));
      });
    //return json.book;
  })
      .catch (error => dispatch(getBookFailure(error)));
};
}

/*export function getCharacter(url) {
  return dispatch => {
    dispatch(getCharacterBegin());
    return fetch(url)
      .then(res => res.json())
      .then(json => {
        dispatch(getCharacterSuccess(json));
        return json;
      })
      .catch(error => dispatch(getCharacterFailure(error)));
  };
}*/