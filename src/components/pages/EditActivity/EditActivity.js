import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../../helpers/data/authData';

class EditActivity extends React.Component {
  static propTypes = {
    updateActivity: PropTypes.func.isRequired,
    editedActivity: PropTypes.object.isRequired,
  }

  state = {
    name: '',
    description: '',
    timesPerWeekGoal: '',
    isArchived: false,
    uid: authData.getUid(),
    isEditing: false,
  }

  componentDidMount() {
    const { editedActivity } = this.props;
    if (editedActivity.name) {
      this.setState({
        name: editedActivity.name,
        description: editedActivity.description,
        timesPerWeekGoal: editedActivity.timesPerWeekGoal,
        isArchived: editedActivity.isArchived,
        uid: editedActivity.uid,
        isEditing: true,
      });
    }
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

  editedActvitiyEvent = (e) => {
    e.preventDefault();
    const {
      name,
      description,
      timesPerWeekGoal,
      isArchived,
    } = this.state;
    const { updateActivity, editedActivity } = this.props;

    const myActivityWithChanges = {
      name,
      description,
      timesPerWeekGoal,
      isArchived,
      uid: authData.getUid(),
    };
    updateActivity(editedActivity.id, myActivityWithChanges);
  }

  render() {
    const {
      name,
      description,
      timesPerWeekGoal,
      isArchived,
      isEditing,
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
          {
            isEditing
              ? <button className="btn btn-dark" onClick={this.editedActvitiyEvent}><i className="fas fa-save fa-lg"></i></button>
              : ''
          }
          </form>
    );
  }
}

export default EditActivity;
