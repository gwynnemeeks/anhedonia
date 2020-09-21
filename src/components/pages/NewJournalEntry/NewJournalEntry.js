import React from 'react';
import PropTypes from 'prop-types';
import authData from '../../../helpers/data/authData';

class NewJournalEntry extends React.Component {
  static propTypes = {
    createJournalEntry: PropTypes.func.isRequired,
    updateJournalEntry: PropTypes.func.isRequired,
    editedJournalEntry: PropTypes.object.isRequired,
  }

  state = {
    activityName: '',
    date: '',
    mood: '',
    moodColor: '',
    moodIcon: '',
    entryText: '',
    activityId: '',
    isEditing: false,
  }

  componentDidMount() {
    const { editedJournalEntry } = this.props;
    if (editedJournalEntry.activityName) {
      this.setState({
        activityName: editedJournalEntry.activityName,
        date: editedJournalEntry.date,
        mood: editedJournalEntry.mood,
        moodColor: editedJournalEntry.moodColor,
        moodIcon: editedJournalEntry.moodColor,
        entryText: editedJournalEntry.entryText,
        activityId: editedJournalEntry.activityId,
        isEditing: true,
      });
    }
  }

  changeActivityNameEvent = (e) => {
    e.preventDefault();
    this.setState({ activityName: e.target.value });
  }

  changeDateEvent = (e) => {
    e.preventDefault();
    this.setState({ date: e.target.value });
  }

  changeMoodEvent = (e) => {
    e.preventDefault();
    this.setState({ mood: e.target.value });
  }

  changeMoodIconEvent = (e) => {
    e.preventDefault();
    this.setState({ moodIcon: e.target.value });
  }

  changeMoodColorEvent = (e) => {
    e.preventDefault();
    this.setState({ moodColor: e.target.value });
  }

  changeEntryTextEvent = (e) => {
    e.preventDefault();
    this.setState({ entryText: e.target.value });
  }

  saveJournalEntryEvent = (e) => {
    e.preventDefault();
    const {
      activityName,
      date,
      mood,
      moodIcon,
      moodColor,
      entryText,
    } = this.state;
    const { createJournalEntry, activityId } = this.props;

    const newJournalEntry = {
      activityId,
      activityName,
      date,
      mood,
      moodIcon,
      moodColor,
      entryText,
      uid: authData.getUid(),
    };
    createJournalEntry(newJournalEntry);
  }

  editJournalEntryEvent = (e) => {
    e.preventDefault();
    const {
      activityName,
      date,
      mood,
      moodIcon,
      moodColor,
      entryText,
      activityId,
    } = this.state;
    const { updateJournalEntry, editedJournalEntry } = this.props;

    const entryWithChanges = {
      activityName,
      date,
      mood,
      moodIcon,
      moodColor,
      entryText,
      activityId,
      uid: authData.getUid(),
    };
    updateJournalEntry(editedJournalEntry.id, entryWithChanges);
  }

  render() {
    const {
      activityName,
      date,
      mood,
      moodIcon,
      moodColor,
      entryText,
      isEditing,
    } = this.state;

    return (
      <form className="col-6 offset-3">
      <div className="form-group">
      <label htmlFor="activityName">Activity Name</label>
      <input
      type="text"
      className="form-control"
      id="activityName"
      placeholder="Enter Activity Name"
      value={activityName}
      onChange={this.changeActivityNameEvent}
    />
  </div>
  <div className="form-group">
    <label htmlFor="date">Journal Entry Date</label>
    <input
      type="text"
      className="form-control"
      id="date"
      placeholder="Enter date in the following format: MM.DD.YYYY"
      value={date}
      onChange={this.changeDateEvent}
    />
  </div>
  <div className="form-group">
    <label htmlFor="mood">Your Current Mood</label>
    <input
      type="text"
      className="form-control"
      id="mood"
      placeholder="Current Mood"
      value={mood}
      onChange={this.changeMoodEvent}
    />
  </div>
  <div className="form-group">
            <label htmlFor="moodIcon">Mood Icon</label>
            <input
            type="text"
            className="form-control"
            id="moodIcon"
            placeholder="Enter Font Awesome Icon here and add fa-3x"
            value={moodIcon}
            onChange={this.changeMoodIconEvent}
          />
        </div>
  <div className="form-group">
    <label htmlFor="moodColor">Mood Color</label>
    <input
      type="text"
      className="form-control"
      id="moodColor"
      placeholder="Mood Color"
      value={moodColor}
      onChange={this.changeMoodColorEvent}
    />
    <div className="form-group">
    <label htmlFor="entryText">Entry Text</label>
    <input
      type="textarea"
      className="form-control"
      id="entryText"
      placeholder="Journal Entry Text"
      value={entryText}
      onChange={this.changeEntryTextEvent}
    />
  </div>
  {
    isEditing
      ? <button className="btn btn-light" onClick={this.editJournalEntryEvent}><i className="fas fa-pen-nib"></i></button>
      : <button className="btn btn-dark" onClick={this.saveJournalEntryEvent}><i className="fas fa-save"></i></button>
  }
</div>
</form>
    );
  }
}

export default NewJournalEntry;
