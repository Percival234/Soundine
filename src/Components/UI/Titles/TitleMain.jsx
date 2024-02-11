import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

function TitleMain({ children, className }) {
  const classses = twMerge(
    'text-xl @2xl:text-3xl @5xl:text-5xl @5xl:leading-snug @2xl:pt-5 text-center text-transparent bg-gradient-to-tr from-purple-600 to-main bg-clip-text',
    className
  );
  return <h2 className={classses}>{children}</h2>;
}

TitleMain.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default TitleMain;
