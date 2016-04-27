import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/index'

class PostsIndex extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }
    render() {
        return (
            <div>List of Blog Posts</div>
        );
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ fetchPosts}, dispatch)
// }



export default connect(null, { fetchPosts })(PostsIndex)
