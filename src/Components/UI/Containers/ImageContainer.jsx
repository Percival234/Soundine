import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

function ImageContainer({ children, className }) {
  const classes = twMerge(
    'bg-gray-opacity relative rounded-lg w-[200px] @5xl:w-[270px] aspect-square overflow-hidden isolate',
    className
  );

  return <div className={classes}>{children}</div>;
}

ImageContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default ImageContainer;
