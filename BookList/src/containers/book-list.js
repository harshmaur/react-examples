import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

class BookList extends Component {
     renderList(){
         return this.props.books.map((book) => {
             return (
                 <li
                     className="list-group-item"
                     onClick={()=> this.props.selectBook(book)}
                     key={book.title}>{book.title}
                 </li>
             )
         })
     }

     render() {
         return (
            <ul className="list-group col-sm-4">
                    {this.renderList()}
            </ul>
         )
     }
 }

function mapStateToProps(state) {
    // whatever is returned will show as props in BookList
    return {
        books: state.books
    }
}

// Anything returned from this function will end up as props on BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, result should be passed to all our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}


// Promote BookList from Component to container - it needs to know about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList)
