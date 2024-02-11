import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

import LinkScroll from '@UI/Links/LinkScroll';

function LinkOutline({ to, children, className }) {
  const classes = twMerge(
    'font-medium text-center block whitespace-nowrap py-2.5 px-10 border border-solid border-white rounded-full duration-150 hover:bg-white hover:text-zinc-800 active:scale-95',
    className
  );

  return (
    <LinkScroll to={to} className={classes}>
      {children}
    </LinkScroll>
  );
}

LinkOutline.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default LinkOutline;
