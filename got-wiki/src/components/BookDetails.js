import React, { Component } from 'react';
import '../App.css';
import { store } from '../store';
import { getBook } from '../actions';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

class BookDetails extends Component {

    constructor({ match }) {
        super();
        store.getState().book.id = match.params.id;
    }

    componentDidMount() {
        this.props.dispatch(getBook(store.getState().book.id));
    }

    render() {
        const { error, loading, book } = this.props;

        if (error) {
            return <div>An error happened when trying to retreive the book.</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h3><Link to="/">Books</Link>/ {book.name}</h3>
                <h3>Details</h3>
                <div>
                    <p>Name : {book.name}</p>
                    <p>ISBN : {book.isbn} </p>
                    <p>Authors : {book.authors}</p>
                    <p>Publisher : {book.publisher} </p>
                    <p>Released : {book.released}</p>
                </div>

                <h3>Characters</h3>
                <table>
                    <th>Chars Names</th>
                    <th>Details</th>

                    <tbody>
                        {listCharacters(book)}
                    </tbody>
                </table>

            </div>
        );
    }
}

function listCharacters(book) {
    if (book.charactersc) {
        book.charactersc.map(character => {
            console.log(character.name)
            character.id = character.url.split('/')[5];
            return (
                <tr key={character.id}>
                    <td>{character.name}</td>
                    <td><Link to={`/character/${character.id}`}><button>Details</button></Link></td>
                </tr>
            );
        });
    }
}

const mapStateToProps = state => ({
    book: store.getState().book,
    loading: store.getState().loading,
    error: store.getState().error
});

export default connect(mapStateToProps)(BookDetails);


/*
                        /*book.charactersc.map(character => {*/
                         //console.log(chara);

                         //this.props.dispatch(getCharacter(url));

                         //character.id = character.url.split('/')[5];

/*return (
     <tr key={character.id}>
         <td>{character.name}</td>
         <td><Link to={`/character/${character.id}`}><button>Details</button></Link></td>
 </tr>);*/