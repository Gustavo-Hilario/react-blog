import React from "react";

import { connect } from "react-redux";
import { fetchUser } from "../actions/index";

class UserHeader extends React.Component {
    componentDidMount() {
        console.log(this.props.userId);
        this.props.fetchUser(this.props.userId);
    }

    render() {
        const { user } = this.props;
        if (!user) {
            return null;
        }
        return <div className="header">{user.name}</div>;
    }
}

// Getting components props inside mapStateToProps function
const mapStateToProps = (state, ownProps) => {
    return {
        user: state.users.find((user) => user.id === ownProps.userId),
    };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
