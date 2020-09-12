import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

class MyNavbar extends React.Component {
  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    return (
      <div className="MyNavbar">
        <h1>My MyNavbar</h1>
        <button className="btn btn-success" onClick={this.logMeOut}><i className="fas fa-sign-out-alt fa-flip-horizontal fa-lg"></i></button>
      </div>
    );
  }
}

export default MyNavbar;
