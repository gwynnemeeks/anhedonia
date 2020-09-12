import React from 'react';

class EditActivity extends React.Component {
  render() {
    const { activityId } = this.props.match.params;
    return (
            <div className="EditActivity">
                <h1>You are editing Activity: {activityId}</h1>
            </div>
    );
  }
}

export default EditActivity;
