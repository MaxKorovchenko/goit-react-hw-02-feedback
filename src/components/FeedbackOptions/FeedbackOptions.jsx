import PropTypes from 'prop-types';
import { Button, List } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <List>
        <li>
          <Button onClick={onLeaveFeedback[0]}>{options[0]}</Button>
        </li>
        <li>
          <Button onClick={onLeaveFeedback[1]}>{options[1]}</Button>
        </li>
        <li>
          <Button onClick={onLeaveFeedback[2]}>{options[2]}</Button>
        </li>
      </List>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.arrayOf(PropTypes.func.isRequired).isRequired,
};
