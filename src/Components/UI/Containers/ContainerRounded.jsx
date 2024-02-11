import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

function ContainerRounded({ children, className }) {
  const classes = twMerge(
    'relative flex flex-col gap-3 md:gap-5 p-3 md:p-5 rounded-lg bg-zinc-100 dark:bg-zinc-900',
    className
  );
  return <div className={classes}>{children}</div>;
}

ContainerRounded.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default ContainerRounded;
