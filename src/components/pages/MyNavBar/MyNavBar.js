import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';

import Auth from '../Auth/Auth';

import './MyNavBar.scss';

class MyNavbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Anhedonia</a>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            {
              authed
                ? <button className="nav-link btn btn-danger text-light logout-button" onClick={this.logMeOut}><i className="fas fa-sign-out-alt"></i> Logout</button>
                : <Auth />
            }
          </li>
        </ul>
      </nav>
    );
  }
}

export default MyNavbar;
