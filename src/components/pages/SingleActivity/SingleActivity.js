import React from 'react';
import PropTypes from 'prop-types';

import activityData from '../../../helpers/data/activityData';

class SingleActivity extends React.Component {
  static propTypes = {
    activityId: PropTypes.string.isRequired,
    setSingleActivity: PropTypes.func.isRequired,
  }

  state = {
    activity: {},
  }

  componentDidMount() {
    const { activityId } = this.props;
    activityData.getSingleActivity(activityId)
      .then((response) => this.setState({ activity: response.data }))
      .catch((err) => console.error('get single activity borked', err));
  }

  render() {
    const { activity } = this.state;
    const { setSingleActivity } = this.props;

    return (
      <div>
        <h1>{activity.name}</h1>
        <button className="btn btn-danger" onClick={() => { setSingleActivity(''); }}><i className="fas fa-undo-alt fa-lg"></i></button>
      </div>
    );
  }
}

export default SingleActivity;
