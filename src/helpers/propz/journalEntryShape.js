import PropTypes from 'prop-types';

const journalEntryShape = PropTypes.shape({
  activityName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  mood: PropTypes.string.isRequired,
  moodColor: PropTypes.string.isRequired,
  moodIcon: PropTypes.string.isRequired,
  entryText: PropTypes.string.isRequired,
  activityId: PropTypes.string.isRequired,
});

export default { journalEntryShape };
