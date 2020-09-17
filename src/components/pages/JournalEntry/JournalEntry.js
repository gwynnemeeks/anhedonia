import React from 'react';
import PropTypes from 'prop-types';

import journalEntryShape from '../../../helpers/propz/journalEntryShape';

class JournalEntry extends React.Component {
    static propTypes = {
      entry: journalEntryShape.journalEntryShape,
      deleteJournalEntry: PropTypes.func.isRequired,
    }

    deleteJournalEntryEvent = (e) => {
      e.preventDefault();
      const { journalEntry, deleteJournalEntry } = this.props;
      deleteJournalEntry(journalEntry.id);
    }

    render() {
      const { journalEntry } = this.props;

      return (
        <div className="card mb-3">
        <div className="card-body">
        <h5 className="card-title">{journalEntry.activityName}</h5>
        <p className="card-text">{journalEntry.entryText}</p>
        <p className="card-text"><small className="text-muted">{journalEntry.date}</small></p>
        <button className="btn btn-danger" onClick={this.deleteJournalEntryEvent}><i className="far fa-trash-alt fa-lg"></i></button>
        </div>
        </div>
      );
    }
}

export default JournalEntry;
