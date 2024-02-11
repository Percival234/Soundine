import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

function Text({ className, children }) {
  const classes = twMerge('opacity-80 text-sm md:text-base text-center', className);
  return <p className={classes}>{children}</p>;
}

Text.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Text;
