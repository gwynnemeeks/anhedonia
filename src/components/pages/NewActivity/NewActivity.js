import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../../helpers/data/authData';

class NewActivity extends React.Component {
  static propTypes = {
    createActvity: PropTypes.func.isRequired,
  }

  state = {
    name: '',
    description: '',
    timesPerWeekGoal: '',
    isArchived: '',
  }

  changeNameEvent = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  }

  changeDescriptionEvent = (e) => {
    e.preventDefault();
    this.setState({ description: e.target.value });
  }

  changeTimesPerWeekGoalEvent = (e) => {
    e.preventDefault();
    this.setState({ timesPerWeekGoal: e.target.value });
  }

  changeIsArchievedEvent = (e) => {
    e.preventDefault();
    this.setState({ isArchived: e.target.checked });
  }

  saveActvitiyEvent = (e) => {
    e.preventDefault();
    const {
      name,
      description,
      timesPerWeekGoal,
      isArchived,
    } = this.state;
    const { createActvity } = this.props;

    const newActivity = {
      name,
      description,
      timesPerWeekGoal,
      isArchived,
      uid: authData.getUid(),
    };
    createActvity(newActivity);
    console.warn('here is a new activity', newActivity);
  }

  render() {
    return (
            <div className="NewActivity">
                <h1>New Activity</h1>
            </div>
    );
  }
}

export default NewActivity;
