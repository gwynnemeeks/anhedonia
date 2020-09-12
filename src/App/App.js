import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import Auth from '../components/pages/Auth/Auth';
import EditActivity from '../components/pages/EditActivity/EditActivity';
import EditJournalEntry from '../components/pages/EditJournalEntry/EditJournalEntry';
import Home from '../components/pages/Home/Home';
import MyNavbar from '../components/pages/MyNavBar/MyNavBar';
import NewActivity from '../components/pages/NewActivity/NewActivity';
import NewJournalEntry from '../components/pages/NewJournalEntry/NewJournalEntry';
import SingleActivity from '../components/pages/SingleActivity/SingleActivity';

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

        <EditActivity />
        <EditJournalEntry />
        <Home />
        <NewActivity />
        <NewJournalEntry />
        <SingleActivity />
      </div>
    );
  }
}

export default App;
