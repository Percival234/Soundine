import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Loading from '@Components/Loading/Loading';

import { useCurrentQuery } from '@Redux/APIEndpoints/userEndpoints';

function AuthProvider({ children }) {
  const { user } = useSelector((state) => state.user);
  const { isFetching } = useCurrentQuery();
  if (isFetching && !user) return <Loading />;
  return <>{user && children}</>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
