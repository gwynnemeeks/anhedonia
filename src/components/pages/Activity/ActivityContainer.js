import React from 'react';

import Activity from './Activity';

import authData from '../../../helpers/data/authData';
import activityData from '../../../helpers/data/activityData';

class ActivityContainer extends React.Component {
    state = {
      activities: [],
    }

    componentDidMount() {
      activityData.getActivitiesByUid(authData.getUid())
        .then((activities) => this.setState({ activities }))
        .catch((err) => console.error('get activities sucks', err));
    }

    render() {
      const { activities } = this.state;

      const activityCard = activities.map((activity) => <Activity key={activity.id} activity={activity} />);
      return (
            <div className="card-columns">
                {activityCard}
            </div>
      );
    }
}

export default ActivityContainer;
