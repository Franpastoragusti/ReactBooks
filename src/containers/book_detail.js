import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookDetail extends Component {

    renderList(){
        return this.props.books.map((book) => {
            return (
                <li
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            )
        })
    }

    
    render(){
        return(
            <div>BookDetail</div>
        )
    }
}

function mapStateToProps(state){
    //Whenever is returned will show up as props
    //inside of the Booklist
    return {
        books: state.books
    }
}
//Anything return wil end ups as props on the BookList container
function mapDispatchToProps(dispatch){
    //Whenever selectBook it's called, the result should be passed
    //to all of our reducers
    return bindActionCreators({ selectBook : selectBook }, dispatch);
}

//Promote BookList from a component to a container -it needs to know
//about this new dispatch method, selectBook. Make available
//as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);