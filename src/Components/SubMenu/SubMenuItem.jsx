import PropTypes from 'prop-types';

function SubMenuItem({ Icon, text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex gap-4 items-center font-normal text-left py-2 pl-3 pr-8 duration-200 hover:bg-gray-opacity hover:text-main active:bg-gray-opacity active:text-main">
      {Icon && <Icon size={22} />}
      {text}
    </button>
  );
}

SubMenuItem.propTypes = {
  Icon: PropTypes.elementType,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SubMenuItem;
