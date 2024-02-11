import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

function GridContainer({ children, className }) {
  const classes = twMerge(
    'grid grid-cols-2 @lg:grid-cols-3 @3xl:grid-cols-4 @5xl:grid-cols-5 gap-2 @2xl:gap-4',
    className
  );
  return <div className={classes}>{children}</div>;
}

GridContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default GridContainer;
