import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

    renderList(){
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            )
        })
    }

    
    render(){
        return(
            <ul className="list-group col-sm-4">
            { this.renderList() }
            </ul>
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
function mapDispatchToProps(dispatch, ownProps){
    //Whenever selectBook it's called, the result should be passed
    //to all of our reducers
    return bindActionCreators({ selectBook : selectBook }, dispatch);
}

//Promote BookList from a componentn to a container -it needs to know
//about this new dispatch method, selectBook. Make abaliable
//as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);