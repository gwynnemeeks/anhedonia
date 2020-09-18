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

const getSingleActivity = (activityId) => axios.get(`${baseUrl}/activity/${activityId}.json`);

const deleteActivity = (activityId) => axios.delete(`${baseUrl}/activity/${activityId}.json`);

const createActivity = (newActvity) => axios.post(`${baseUrl}/activity.json`, newActvity);

export default {
  getActivitiesByUid,
  getSingleActivity,
  deleteActivity,
  createActivity,
};
