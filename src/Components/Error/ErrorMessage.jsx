import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

function ErrorMessage({ error, className }) {
  const classes = twMerge('text-main text-sm font-bold min-h-[3em] max-w-xs mb-2', className);
  return <div className={classes}>{error}</div>;
}

ErrorMessage.propTypes = {
  error: PropTypes.string,
  className: PropTypes.string,
};

export default ErrorMessage;
