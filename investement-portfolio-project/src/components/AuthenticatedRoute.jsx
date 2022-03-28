import React from 'react';
import {Route, Navigate} from 'react-router-dom';
import { connect } from 'react-redux';

class AuthenticatedRoute extends React.Component {
  render() {
      if(this.props.loggedIn) {
        return <Route {...this.props} />
      } else {
          return <Navigate to="/" />
      }
  }
}

const mapStateToProps = ({ loggedIn }) => {
    return { loggedIn }
}

export default connect(mapStateToProps)(AuthenticatedRoute);