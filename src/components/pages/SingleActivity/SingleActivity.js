import React from 'react';
import PropTypes from 'prop-types';

import JournalEntry from '../JournalEntry/JournalEntry';

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
  }

  componentDidMount() {
    const { activityId } = this.props;

    activityData.getSingleActivity(activityId)
      .then((response) => this.setState({ activity: response.data }))
      .catch((err) => console.error('get single activity borked', err));

    journalData.getJournalEntryByActivityId(activityId)
      .then((journalEntries) => this.setState({ journalEntries }))
      .catch((err) => console.error('get entries noped', err));
  }

  render() {
    const { activity, journalEntries } = this.state;
    const { setSingleActivity } = this.props;

    const journalCards = journalEntries.map((journalEntry) => <JournalEntry key={journalEntry.id} journalEntry={journalEntry} />);

    return (
      <div>
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
