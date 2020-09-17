import React from 'react';
import PropTypes from 'prop-types';

import journalEntryShape from '../../../helpers/propz/journalEntryShape';

class JournalEntry extends React.Component {
    static propTypes = {
      entry: journalEntryShape.journalEntryShape,
      deleteEntry: PropTypes.func.isRequired,
    }

    deleteEntryEvent = (e) => {
      e.preventDefault();
      const { entry, deleteEntry } = this.props;
      deleteEntry(entry.id);
    }

    render() {
      const { journalEntry } = this.props;

      return (
        <div className="card mb-3">
        <div className="card-body">
        <h5 className="card-title">{journalEntry.activityName}</h5>
        <p className="card-text">{journalEntry.entryText}</p>
        <p className="card-text"><small className="text-muted">{journalEntry.date}</small></p>
        <button className="btn btn-danger" onClick={this.deleteEntryEvent}><i className="far fa-trash-alt fa-lg"></i></button>
        </div>
        </div>
      );
    }
}

export default JournalEntry;
