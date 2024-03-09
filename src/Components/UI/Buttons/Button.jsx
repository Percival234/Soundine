import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

function Button({ children, className, type, ...props }) {
  const classes = twMerge(
    'py-2 px-3 lg:px-5 text-sm lg:text-base text-white rounded bg-gradient-to-tr from-purple-800 to-main border border-solid border-main duration-200 hover:bg-transparent hover:text-main disabled:opacity-50',
    className
  );

  return (
    <button {...props} type={type || 'button'} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
