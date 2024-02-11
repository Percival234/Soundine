import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

function SubTitle({ children, hash, className }) {
  const classes = twMerge(
    `text-xl @5xl:text-3xl flex gap-0.5 inline-block ${
      hash ? 'duration-200 hover:text-main active:text-main' : ''
    }`,
    className
  );

  return (
    <h3 className={classes}>
      {hash && <span>#</span>}
      {children}
    </h3>
  );
}

SubTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hash: PropTypes.bool,
};

export default SubTitle;
