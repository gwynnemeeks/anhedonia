import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

// import Auth from '../components/pages/Auth/Auth';
// import EditActivity from '../components/pages/EditActivity/EditActivity';
// import EditJournalEntry from '../components/pages/EditJournalEntry/EditJournalEntry';
// import Home from '../components/pages/Home/Home';
import MyNavbar from '../components/pages/MyNavBar/MyNavBar';
// import NewActivity from '../components/pages/NewActivity/NewActivity';
// import NewJournalEntry from '../components/pages/NewJournalEntry/NewJournalEntry';
import SingleActivity from '../components/pages/SingleActivity/SingleActivity';
import ActivityContainer from '../components/pages/Activity/ActivityContainer';
import WelcomePage from '../components/pages/Welcome/WelcomePage';

import fbConnection from '../helpers/data/connection';

import './App.scss';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
    singleActivityId: '',
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

  setSingleActivity = (singleActivityId) => {
    this.setState({ singleActivityId });
  }

  render() {
    const { authed, singleActivityId } = this.state;

    const loadComponent = () => {
      if (authed && singleActivityId.length === 0) {
        return <ActivityContainer setSingleActivity={this.setSingleActivity} />;
      }

      if (authed && singleActivityId.length > 0) {
        return <SingleActivity activityId={singleActivityId} setSingleActivity={this.setSingleActivity} />;
      }
      return <WelcomePage />;
    };

    return (
      <div className="App">
        <MyNavbar authed={authed} />
        {loadComponent()}
      </div>
    );
  }
}

export default App;
