import PropTypes from 'prop-types';

export const Button = ({ loadMore }) => (
  <button type="button" onClick={loadMore}>
    Load more
  </button>
);

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
