import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

import LinkScroll from '@UI/Links/LinkScroll';

function LinkUnderline({ to, children, className }) {
  const classes = twMerge(
    'duration-200 hover:text-main hover:underline active:underline active:text-main',
    className
  );

  return (
    <LinkScroll to={to} className={classes}>
      {children}
    </LinkScroll>
  );
}

LinkUnderline.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default LinkUnderline;
