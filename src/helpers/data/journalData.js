import axios from 'axios';
import apiKeys from '../apiKeys.json';
import utils from '../utils';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getJournalEntryByActivityId = (activityId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/journalEntry.json?orderBy="activityId"&equalTo="${activityId}"`)
    .then(({ data }) => resolve(utils.convertFirebaseCollection(data)))
    .catch((err) => reject(err));
});

export default { getJournalEntryByActivityId };
