import React from 'react';

import activityShape from '../../../helpers/propz/activityShape';

class ActivityCards extends React.Component {
    static propTypes = {
      activities: activityShape.activityShape,
    }

    render() {
      const { activities } = this.props;

      return (
            <div className="card text-center">
        <div className="card-header"><h5>{activities.name}</h5></div>
        <div className="card-body">
          <p className="card-title">{activities.timesPerWeekGoal}</p>
          <p className="card-text">{activities.description}</p>
          <button className="btn btn-secondary">View activity</button>
          </div>
          </div>
      );
    }
}

export default ActivityCards;
