import PropTypes from 'prop-types';

function Error({ error }) {
  return (
    <div className="py-10 text-center text-main">
      <h3 className="text-4xl @4xl:text-5xl mb-4">Error</h3>
      <div className="text-lg @4xl:text-2xl">{error?.data?.error}!</div>
    </div>
  );
}

Error.propTypes = {
  error: PropTypes.object,
};

export default Error;
