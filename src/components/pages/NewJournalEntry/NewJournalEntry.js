import React from 'react';
import PropTypes from 'prop-types';
import authData from '../../../helpers/data/authData';

class NewJournalEntry extends React.Component {
  static propTypes = {
    createJournalEntry: PropTypes.func.isRequired,
  }

  state = {
    activityId: '',
    activityName: '',
    date: '',
    mood: '',
    moodColor: '',
    moodIcon: '',
    entryText: '',
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

  render() {
    return (
            <div className="NewJournalEntry">
                <h1>New Journal Entry</h1>
            </div>
    );
  }
}

export default NewJournalEntry;
