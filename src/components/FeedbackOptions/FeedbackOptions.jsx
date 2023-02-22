import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <ul>
        <li>
          <button onClick={onLeaveFeedback[0]}>{options[0]}</button>
        </li>
        <li>
          <button onClick={onLeaveFeedback[1]}>{options[1]}</button>
        </li>
        <li>
          <button onClick={onLeaveFeedback[2]}>{options[2]}</button>
        </li>
      </ul>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.arrayOf(PropTypes.func.isRequired).isRequired,
};
