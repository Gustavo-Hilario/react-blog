import React from "react";
import { connect } from "react-redux";

import { fetchPosts } from "../actions";

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                <h1>Post List</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: null,
    };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
