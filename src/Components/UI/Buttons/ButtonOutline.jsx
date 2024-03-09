import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

function ButtonOutline({ children, className, type, ...props }) {
  const classes = twMerge(
    'py-2 px-3 lg:px-5 text-sm lg:text-base text-main rounded border border-solid border-main duration-200 hover:bg-main hover:text-white',
    className
  );
  return (
    <button {...props} type={type || 'button'} className={classes}>
      <div className="pointer-events-none">{children}</div>
    </button>
  );
}

ButtonOutline.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ButtonOutline;
