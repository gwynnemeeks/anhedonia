import React from 'react';

import journalEntryShape from '../../../helpers/propz/journalEntryShape';

class JournalEntry extends React.Component {
    static propTypes = {
      entry: journalEntryShape.journalEntryShape,
    }

    render() {
      const { journalEntry } = this.props;

      return (
        <div class="card mb-3">
        <div class="card-body">
        <h5 class="card-title">{journalEntry.activityName}</h5>
        <p class="card-text">{journalEntry.entryText}</p>
        <p class="card-text"><small class="text-muted">{journalEntry.date}</small></p>
        </div>
        </div>
      );
    }
}

export default JournalEntry;
