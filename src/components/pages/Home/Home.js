import React from 'react';

import authData from '../../../helpers/data/authData';
import activityData from '../../../helpers/data/activityData';
import ActivityCards from '../Activity/Activity';

class Home extends React.Component {
  state = {
    activities: [],
  }

  componentDidMount() {
    activityData.getActivitiesByUid(authData.getUid())
      .then((activities) => this.setState({ activities }))
      .catch((err) => console.error('get activities borked', err));
  }

  render() {
    const { activities } = this.state;

    const activityCards = activities.map((activity) => <ActivityCards key={activity.id} activity={activity} />);

    return (
            <div className="Home">
                <h1>Home</h1>
                {activityCards}
                </div>
    );
  }
}

export default Home;
