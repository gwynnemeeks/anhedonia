import React from 'react';

import authData from '../../../helpers/data/authData';
import activityData from '../../../helpers/data/activityData';

class NewActivity extends React.Component {
  state = {
    name: '',
    description: '',
    timesPerWeekGoal: '',
    isArchived: false,
    uid: authData.getUid(),
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

  saveActvitiy = (e) => {
    e.preventDefault();
    const keysIWant = [
      'name',
      'description',
      'timesPerWeekGoal',
      'isArchived',
      'uid',
    ];

    const newActivity = (this.state, keysIWant);
    newActivity.uid = authData.getUid();

    activityData
      .createActivity(newActivity)
      .then((res) => {
        this.props.history.push(`/activity/${res.data.name}`);
      })
      .catch((err) => console.error('fancy new activity fell apart', err));
  };

  render() {
    const {
      name,
      description,
      timesPerWeekGoal,
      isArchived,
    } = this.state;

    return (
      <form className="col 6 offset-3">
      <div className="form-group">
          <label htmlFor="name">Activity Name</label>
          <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter Activity Name"
          value={name}
          onChange={this.changeNameEvent}
          />
      </div>
      <div className="form-group">
          <label htmlFor="description">Activity Description</label>
          <input
          type="text"
          className="form-control"
          id="description"
          placeholder="Enter Activity Description"
          value={description}
          onChange={this.changeDescriptionEvent}
          />
      </div>
      <div className="form-group">
          <label htmlFor="timesPerWeekGoal">How Many Times Per Week Would You Like to do This Activity?</label>
          <input
          type="number"
          className="form-control"
          id="timesPerWeekGoal"
          placeholder="Enter Number Here"
          value={timesPerWeekGoal}
          onChange={this.changeTimesPerWeekGoalEvent}
          />
      </div>
      <div className="form-group">
            <label htmlFor="isArchived">Archive Activity</label>
            <input
              type="checkbox"
              className="form-control"
              id="isArchived"
              checked={isArchived}
              onChange={this.changeIsArchievedEvent}
            />
          </div>
          <button className="btn btn-dark" onClick={this.saveActvitiyEvent}><i className="fas fa-save fa-lg"></i></button>
          </form>
    );
  }
}

export default NewActivity;
