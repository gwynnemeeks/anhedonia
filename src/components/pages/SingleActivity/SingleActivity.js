import React from 'react';
import PropTypes from 'prop-types';

import JournalEntry from '../JournalEntry/JournalEntry';
import NewJournalEntry from '../NewJournalEntry/NewJournalEntry';

import activityData from '../../../helpers/data/activityData';
import journalData from '../../../helpers/data/journalData';

class SingleActivity extends React.Component {
  static propTypes = {
    activityId: PropTypes.string.isRequired,
    setSingleActivity: PropTypes.func.isRequired,
  }

  state = {
    activity: {},
    journalEntries: [],
    showForm: false,
    editEntries: {},
  }

  getJournalEntries = () => {
    const { activityId } = this.props;
    journalData.getJournalEntryByActivityId(activityId)
      .then((journalEntries) => this.setState({ journalEntries }))
      .catch((err) => console.error('get entries noped', err));
  }

  componentDidMount() {
    const { activityId } = this.props;

    activityData.getSingleActivity(activityId)
      .then((response) => this.setState({ activity: response.data }))
      .catch((err) => console.error('get single activity borked', err));

    this.getJournalEntries();
  }

  deleteJournalEntry = (journalEntryId) => {
    journalData.deleteJournalEntry(journalEntryId)
      .then(() => {
        this.getJournalEntries();
      })
      .catch((err) => console.error('delete j entries failed', err));
  }

  createJournalEntry = (newJournalEntry) => {
    journalData.createJournalEntry(newJournalEntry)
      .then(() => {
        this.getJournalEntries();
        this.setState({ showForm: false });
      })
      .catch((err) => console.error(err));
  }

  editAnEntry = (entryToEdit) => {
    this.setState({ showForm: true, editEntries: entryToEdit });
  }

  updateJournalEntries = (journalEntryId, editedEntries) => {
    journalData.updateJournalEntry(journalEntryId, editedEntries)
      .then(() => {
        this.getJournalEntries();
        this.setState({ showForm: false, editEntries: {} });
      })
      .catch((err) => console.error('update entries borked', err));
  }

  render() {
    const {
      activity,
      journalEntries,
      showForm,
      editEntries,
    } = this.state;
    const { setSingleActivity, activityId } = this.props;

    const journalCards = journalEntries.map((journalEntry) => <JournalEntry key={journalEntry.id} journalEntry={journalEntry}
    deleteJournalEntry={this.deleteJournalEntry} editAnEntry={this.editAnEntry} />);

    return (
      <div>
        <button className="btn btn-warning" onClick={() => { this.setState({ showForm: !showForm }); }}>
                <i className={showForm ? 'far fa-times-circle fa-lg' : 'far fa-plus-square fa-lg'}></i></button>
          {showForm ? <NewJournalEntry activityId={activityId} createJournalEntry={this.createJournalEntry} editedJournalEntry={editEntries} updateJournalEntries={this.updateJournalEntries} /> : ''}
        <h1>{activity.name}</h1>
        <button className="btn btn-danger" onClick={() => { setSingleActivity(''); }}><i className="fas fa-undo-alt fa-lg"></i></button>
        <div className="card-columns">
          {journalCards}
        </div>
      </div>
    );
  }
}

export default SingleActivity;
