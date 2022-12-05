import PropTypes from 'prop-types';
import { ButtonLoadMore } from './Button.styled';

export const Button = ({ loadMore }) => (
  <ButtonLoadMore type="button" onClick={loadMore}>
    Load more
  </ButtonLoadMore>
);

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
