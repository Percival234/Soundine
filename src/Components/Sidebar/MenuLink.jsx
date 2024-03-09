import PropTypes from 'prop-types';

import NavLinkScroll from '@UI/Links/NavLinkScroll';

function MenuLink({ to, Icon, text }) {
  return (
    <li>
      <NavLinkScroll
        activeclass="active"
        className="flex gap-4 items-center py-2 pl-6 opacity-60 border-r-4 border-solid border-transparent text-lg whitespace-nowrap duration-200 hover:opacity-100 focus:opacity-100"
        to={to}>
        <Icon size={24} />
        {text}
      </NavLinkScroll>
    </li>
  );
}

MenuLink.propTypes = {
  to: PropTypes.string.isRequired,
  Icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default MenuLink;
