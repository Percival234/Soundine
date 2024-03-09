import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { scrollToTop } from '@Helpers/scrollToTop';

function LinkScroll({ to, children, onClick, ...props }) {
  const handle = () => {
    if (onClick) onClick();
    scrollToTop();
  };
  return (
    <div onClick={handle} className="inline-block">
      <Link to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}

LinkScroll.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default LinkScroll;
