import React from 'react';
import PropTypes from 'prop-types';

import Activity from './Activity';
import NewActivity from '../NewActivity/NewActivity';
// import EditActivity from '../EditActivity/EditActivity';

import authData from '../../../helpers/data/authData';
import activityData from '../../../helpers/data/activityData';
import smash from '../../../helpers/data/smash';

class ActivityContainer extends React.Component {
    static propTypes = {
      setSingleActivity: PropTypes.func.isRequired,
    }

    state = {
      activities: [],
      formOpen: false,
      editActivity: {},
    }

    getActivity = () => {
      activityData.getActivitiesByUid(authData.getUid())
        .then((activities) => this.setState({ activities }))
        .catch((err) => console.error('get activities sucks', err));
    }

    componentDidMount() {
      this.getActivity();
    }

    deleteActivity = (activityId) => {
      smash.deleteActivitiesAndEntries(activityId)
        .then(() => {
          this.getActivity();
        })
        .catch((err) => console.error('delete activity is being mean', err));
    }

    createActivity = (newActivity) => {
      activityData.createActivity(newActivity)
        .then(() => {
          this.getActivity();
          this.setState({ formOpen: false });
        })
        .catch((err) => console.error('create activity went awry', err));
    }

    editAnActivity = (activityToEdit) => {
      this.setState({ formOpen: true, editActivity: activityToEdit });
    }

    updateActivity = (activityId, updatedActivity) => {
      activityData.updateActivity(activityId, updatedActivity)
        .then(() => {
          this.getActivity();
          this.setState({ formOpen: false, editActivity: {} });
        })
        .catch((err) => console.error('update activity sucks', err));
    }

    render() {
      const {
        activities,
        formOpen,
        editActivity,
      } = this.state;
      const { setSingleActivity } = this.props;

      const activityCard = activities.map((activity) => <Activity key={activity.id} activity={activity} setSingleActivity={setSingleActivity}
      deleteActivity={this.deleteActivity} editAnActivity={this.editAnActivity} />);

      return (
  <div>
        <button className="btn btn-warning" onClick={() => { this.setState({ formOpen: !formOpen }); }}><i className="far fa-plus-square fa-lg"></i></button>
      { formOpen ? <NewActivity createActivity={this.createActivity} editAnActivity={editActivity} updateActivity={this.updateActivity} /> : '' }

            <div className="card-columns">
                {activityCard}
            </div>
            </div>
      );
    }
}

export default ActivityContainer;
