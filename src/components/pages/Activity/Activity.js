import React from 'react';
import PropTypes from 'prop-types';

import activityShape from '../../../helpers/propz/activityShape';

class ActivityCard extends React.Component {
    static propTypes = {
      activity: activityShape.activityShape,
      setSingleActivity: PropTypes.func.isRequired,
      deleteActivity: PropTypes.func.isRequired,
      editAnActivity: PropTypes.func.isRequired,
    }

    singleActivityEvent = (e) => {
      e.preventDefault();
      const { activity, setSingleActivity } = this.props;
      setSingleActivity(activity.id);
    }

    deleteActivityEvent = (e) => {
      e.preventDefault();
      const { activity, deleteActivity } = this.props;
      deleteActivity(activity.id);
    }

    editActivityEvent = (e) => {
      e.preventDefault();
      const { editAnActivity, activity } = this.props;
      editAnActivity(activity);
    }

    render() {
      const { activity } = this.props;

      return (
            <div className="card text-center">
        <div className="card-header"><h5>{activity.name}</h5></div>
        <div className="card-body">
          <p className="card-title">Times Per Week Goal: {activity.timesPerWeekGoal}</p>
          <p className="card-text">{activity.description}</p>
          <button className="btn btn-secondary" onClick={this.singleActivityEvent}><i className="fas fa-binoculars fa-lg"></i></button>
          <button className="btn btn-warning" onClick={this.editActivityEvent}><i className="fas fa-pen-nib fa-lg"></i></button>
          <button className="btn btn-danger" onClick={this.deleteActivityEvent}><i className="far fa-trash-alt fa-lg"></i></button>
          </div>
          </div>
      );
    }
}

export default ActivityCard;
