import React from 'react';
import PropTypes from 'prop-types';

import Activity from './Activity';

import authData from '../../../helpers/data/authData';
import activityData from '../../../helpers/data/activityData';
import smash from '../../../helpers/data/smash';

class ActivityContainer extends React.Component {
    static propTypes = {
      setSingleActivity: PropTypes.func.isRequired,
    }

    state = {
      activities: [],
    }

    getActivity = () => {
      activityData.getActivitiesByUid(authData.getUid())
        .then((activities) => this.setState({ activities }))
        .catch((err) => console.error('get activities sucks', err));
    }

    componentDidMount() {
      this.getActivity();
    }

    deleteActivity = (activityId) => {
      smash.deleteActivitiesAndEntries(activityId)
        .then(() => {
          this.getActivity();
        })
        .catch((err) => console.error('delete activity is being mean', err));
    }

    render() {
      const { activities } = this.state;
      const { setSingleActivity } = this.props;

      const activityCard = activities.map((activity) => <Activity key={activity.id} activity={activity} setSingleActivity={setSingleActivity} deleteActivity={this.deleteActivity} />);
      return (
            <div className="card-columns">
                {activityCard}
            </div>
      );
    }
}

export default ActivityContainer;
