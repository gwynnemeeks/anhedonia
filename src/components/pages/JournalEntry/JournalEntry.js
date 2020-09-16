import React from 'react';

import journalEntryShape from '../../../helpers/propz/journalEntryShape';

class JournalEntry extends React.Component {
    static propTypes = {
      journalEntry: journalEntryShape.journalEntryShape,
    }

    render() {
      const { journalEntry } = this.props;

      return (
        <div className="card text-center">
        <h5 className="card-title">{journalEntry.activityName}</h5>
        <p className="card-text">{journalEntry.entryText}</p>
        <p className="card-text">Mood: {journalEntry.mood} Icon: {journalEntry.moodIcon}</p>
        <p className="card-text"><small className="text-muted">{journalEntry.date}</small></p>
      </div>
      );
    }
}

export default JournalEntry;
