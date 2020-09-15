import React from 'react';

import activityShape from '../../../helpers/propz/activityShape';

class ActivityCards extends React.Component {
    static propTypes = {
      activity: activityShape.activityShape,
    }

    render() {
      const { activity } = this.props;

      return (
            <div className="card text-center">
        <div className="card-header"><h5>{activity.name}</h5></div>
        <div className="card-body">
          <p className="card-title">{activity.timesPerWeekGoal}</p>
          <p className="card-text">{activity.description}</p>
          <button className="btn btn-secondary">View activity</button>
          </div>
          </div>
      );
    }
}

export default ActivityCards;
