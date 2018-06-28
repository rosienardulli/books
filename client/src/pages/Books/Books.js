import React, { Component } from 'react';
import API from './../../utils/API';

class Books extends Component {
    state = {
        books: [],
    };

    //lifecycles
    componentDidMount() {
        this.loadBooks();
    }

    //my methods
    loadBooks = () => {
    //set books array to some books from mongo
    API.getBooks()
        .then(res =>
            this.setState({ books: res.data })
        )
        .catch(err => console.log(err));
}

    render() {
        return (
            <div>
                <p> this is a list of books </p>
                {this.state.books.map(book => (
                    <div>{book.title}</div>
                ))}
            </div>
        );
    }

}

export default Books;