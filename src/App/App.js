import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import Auth from '../components/pages/Auth/Auth';
import MyNavbar from '../components/pages/MyNavBar/MyNavBar';

import fbConnection from '../helpers/data/connection';

import './App.scss';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    return (
      <div className="App">
        <h1>Anhedonia</h1>
        <MyNavbar />
        <Auth />
      </div>
    );
  }
}

export default App;
