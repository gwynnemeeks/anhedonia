import React from 'react';

import './WelcomePage.scss';

class WelcomePage extends React.Component {
  render() {
    const welcomeCard = {
      width: '18rem',
      backgroundColor: 'salmon',
      color: 'white',
      align: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    };
    return (
        <div className="card-columns">
<div className="card welcomeCard" style={welcomeCard}>
  <div className="card-body">
    <h3 className="card-title">Anhedonia</h3>
    <p className="card-text">Anhedonia is the inability to feel pleasure. It's a common symptom of depression as well as other mental health disorders.</p>
    <p>It can also described as a loss of interest in activities that used to give joy or pleasure.</p>
        <p>This app seeks to provide some biofeedback for Anhedonia.</p>
  </div>
</div>
</div>
    );
  }
}

export default WelcomePage;
