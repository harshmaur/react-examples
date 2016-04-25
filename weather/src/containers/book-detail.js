import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {

        if (!this.props.book) {
            return <div>Select a book to get Started</div>
        }
        return (
            <div>
                <h3>Book Detail</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    // whatever is returned will show as props in BookList
    return {
        book: state.activeBook
    }
}

// Promote BookList from Component to container - it needs to know about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps)(BookDetail)
