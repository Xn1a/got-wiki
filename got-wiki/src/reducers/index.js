export default (state, action) => {
    switch (action.type) {
        case 'FETCH_BOOKS_BEGIN':
            return {
                ...state,
                loading: true,
                error: null
            };

        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                loading: false,
                books: action.payload.books
            };

        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                books: []
            };

        case 'GET_BOOK_BEGIN':
            return {
                ...state,
                loading: true,
                error: null
            };

        case 'GET_BOOK_SUCCESS':
            return {
                ...state,
                loading: false,
                book: action.payload.book
            };

        case 'GET_BOOK_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                book: null
            };

        /*case 'GET_CHARACTER_BEGIN':
            return {
                ...state,
                loading: true,
                error: null
            };

        case 'GET_CHARACTER_SUCCESS':
            return {
                ...state,
                loading: false,
                characters: action.payload.character
            };

        case 'GET_CHARACTER_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                character: {}
            };*/

        default:
            return state;
    }
}