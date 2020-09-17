import activityData from './activityData';
import journalData from './journalData';

const deleteActivitiesAndEntries = (activityId) => new Promise((resolve, reject) => {
  activityData.deleteActivity(activityId)
    .then(() => {
      journalData.getJournalEntryByActivityId(activityId)
        .then((journalEntries) => {
          journalEntries.forEach((journalEntry) => {
            journalData.deleteJournalEntry(journalEntry.id);
          });
          resolve();
        });
    })
    .catch((err) => reject(err));
});

export default { deleteActivitiesAndEntries };
