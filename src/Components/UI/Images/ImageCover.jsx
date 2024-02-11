import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

function ImageCover({ src, alt, className }) {
  const classes = twMerge(
    'object-cover object-center w-full h-full absolute bottom-0 left-0 -z-10 duration-200 group-hover:scale-105',
    className
  );
  return <img className={classes} src={src} alt={alt} />;
}

ImageCover.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ImageCover;
