import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
editActivityEvent = (e) => {
  e.preventDefault();
  const activityId = 'coolActivity01';
  this.props.history.push(`/edit/${activityId}`);
}

render() {
  return (
            <div className="Home">
                <h1>Home</h1>
                <button className="btn btn-dark" onClick={this.editActivityEvent}>Edit Activity</button>
                <Link to='/newActivity'>New Activity</Link>
                <h2>Here is a link to a <Link to='/activity/activity01'>Specific Activity</Link> </h2>
            </div>
  );
}
}

export default Home;
