import axios from 'axios';

import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getActivitiesByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/activity.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const allActivities = response.data;
      const myActivity = [];

      if (allActivities) {
        Object.keys(allActivities).forEach((activityId) => {
          const activity = allActivities[activityId];
          activity.id = activityId;
          myActivity.push(activity);
        });
      }

      resolve(myActivity);
    })
    .catch((err) => reject(err));
});
console.warn(getActivitiesByUid);

export default { getActivitiesByUid };
