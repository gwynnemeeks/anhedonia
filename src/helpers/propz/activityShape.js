import PropTypes from 'prop-types';

const activityShape = PropTypes.shape({
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  timesPerWeekGoal: PropTypes.number.isRequired,
  isArchived: PropTypes.bool.isRequired,
  userId: PropTypes.string.isRequired,
});

export default { activityShape };
