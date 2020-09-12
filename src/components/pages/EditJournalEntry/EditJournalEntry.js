import React from 'react';

class EditJournalEntry extends React.Component {
  render() {
    const { journalEntryId } = this.props.match.params;
    return (
            <div className="EditJournalEntry">
                <h1>You are editing journal entry: {journalEntryId}</h1>
            </div>
    );
  }
}

export default EditJournalEntry;
