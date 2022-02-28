import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { logoutUserAction } from '@actions/UserActions';

const Logout = ({ logoutUser }) => {
    useEffect(() => {
        logoutUser();
    }, []);

    return (
        <div>Logout...</div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => dispatch(logoutUserAction())
    }
}

  
export default connect(null, mapDispatchToProps)(Logout);