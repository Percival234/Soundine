import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

import LinkScroll from '@UI/Links/LinkScroll';

function LinkRounded({ children, className, to, ...props }) {
  const classes = twMerge(
    'flex justify-center items-center p-2.5 text-xl sm:text-2xl rounded z-30 duration-100 hover:bg-gray-opacity hover:text-main active:scale-75 active:text-main disabled:opacity-50',
    className
  );
  return (
    <LinkScroll {...props} to={to} className={classes}>
      {children}
    </LinkScroll>
  );
}

LinkRounded.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default LinkRounded;
