import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../../helpers/data/authData';

class NewActivity extends React.Component {
  static propTypes = {
    createActivity: PropTypes.func.isRequired,
    updateActivity: PropTypes.func.isRequired,
    editAnActivity: PropTypes.object.isRequired,
  }

  state = {
    name: '',
    description: '',
    timesPerWeekGoal: '',
    isArchived: false,
    isEditing: false,
  }

  componentDidMount() {
    const { editAnActivity } = this.props;
    if (editAnActivity.name) {
      this.setState({
        name: editAnActivity.name,
        description: editAnActivity.description,
        timesPerWeekGoal: editAnActivity.timesPerWeekGoal,
        isArchived: editAnActivity.isArchived,
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
    e.preventDefault(); // turn string into an interger
    // const parsed = parseInt(x, base);
    // const timesPerWeekGoal = parseInt(e.target.value, 10);
    this.setState({ timesPerWeekGoal: parseInt(e.target.value, 10) });
  }

  changeIsArchievedEvent = (e) => {
    e.preventDefault();
    this.setState({ isArchived: e.target.checked });
  }

  saveActvitiy = (e) => {
    e.preventDefault();
    const {
      name,
      description,
      timesPerWeekGoal,
      isArchived,
    } = this.state;
    const { createActivity } = this.props;

    const newActivity = {
      name,
      description,
      timesPerWeekGoal,
      isArchived,
      uid: authData.getUid(),
    };
    createActivity(newActivity);
    console.warn('here is a new activity please', newActivity);
  }

  editedActvitiyEvent = (e) => {
    e.preventDefault();
    const {
      name,
      description,
      timesPerWeekGoal,
      isArchived,
    } = this.state;
    const { updateActivity, editAnActivity } = this.props;

    const myActivityWithChanges = {
      name,
      description,
      timesPerWeekGoal,
      isArchived,
      uid: authData.getUid(),
    };
    updateActivity(editAnActivity.id, myActivityWithChanges);
  }

  render() {
    const {
      name,
      description,
      timesPerWeekGoal,
      // isArchived,
      isEditing,
    } = this.state;

    return (
      <form className="col-6 offset-3">
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
      {/* <div className="form-group">
            <label htmlFor="isArchived">Archive Activity</label>
            <input
              type="checkbox"
              className="form-control"
              id="isArchived"
              checked={isArchived}
              onChange={this.changeIsArchievedEvent}
            />
          </div> */}
          {
          isEditing
            ? <button className="btn btn-dark" onClick={this.editedActvitiyEvent}><i className="fas fa-save fa-lg"></i></button>
            : <button className="btn btn-dark" onClick={this.saveActvitiy}><i className="fas fa-save fa-lg"></i></button>
  }
          </form>
    );
  }
}

export default NewActivity;
