import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    return (
      <div className="Auth">
        <button className="btn btn-warning" onClick={this.loginClickEvent}><i className="fas fa-sign-in-alt fa-lg"></i> LogIn</button>
      </div>
    );
  }
}

export default Auth;
