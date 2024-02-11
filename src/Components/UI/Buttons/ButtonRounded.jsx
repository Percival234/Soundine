import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

function ButtonRounded({ children, className, type, ...props }) {
  const classes = twMerge(
    'flex justify-center items-center p-2.5 text-xl sm:text-2xl rounded z-30 duration-100 hover:bg-gray-opacity hover:text-main active:scale-90 active:text-main disabled:opacity-25 disabled:text-zinc-500',
    className
  );
  return (
    <button {...props} type={type || 'button'} className={classes}>
      <div className="pointer-events-none">{children}</div>
    </button>
  );
}

ButtonRounded.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ButtonRounded;
