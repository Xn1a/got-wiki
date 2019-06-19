import React, { Component } from 'react';
import '../App.css';
import { store } from '../store';
import { fetchBooks } from '../actions';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

class BooksTable extends Component {

    componentDidMount() {
        this.props.dispatch(fetchBooks());
    }

    render() {
        const { error, loading, books } = this.props;

        if (error) {
            return <div>An error happened when trying to retreive books.</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h3>Books</h3>
                <table>
                    <th>Book Name</th>
                    <th>Released Date</th>
                    <th>Number Of Pages</th>
                    <th>Details</th>

                    {books.map(book => {

                        book.id = book.url.split('/')[5];

                        return (
                            <tr key={book.id}>
                                <td>{book.name}</td>
                                <td>{book.released}</td>
                                <td>{book.numberOfPages}</td>
                                <td><Link to={`/book/${book.id}`}><button>Details</button></Link></td>
                            </tr>);
                    }
                    )}
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    books: store.getState().books,
    loading: store.getState().loading,
    error: store.getState().error
});

export default connect(mapStateToProps)(BooksTable);