import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { scrollToTop } from '@Helpers/scrollToTop';

function NavLinkScroll({ to, children, ...props }) {
  return (
    <div onClick={scrollToTop} className="inline">
      <NavLink to={to} {...props}>
        {children}
      </NavLink>
    </div>
  );
}

NavLinkScroll.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavLinkScroll;
