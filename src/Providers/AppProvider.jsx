import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [shareLink, setShareLink] = useState('');
  const [menuVisibility, setMenuVisibility] = useState(true);
  const [shareVisibility, setShareVisibility] = useState(false);
  const [logOutVisibility, setLogOutVisibility] = useState(false);
  const [searchVisibility, setSearchVisibility] = useState(false);
  const [deleteUserVisibility, setDeleteUserVisibility] = useState(false);

  const handleMenuVisibility = () => setMenuVisibility(!menuVisibility);
  const handleSearchVisibility = () => setSearchVisibility(!searchVisibility);
  const handleLogOutVisibility = () => setLogOutVisibility(!logOutVisibility);
  const handleDeleteUserVisibility = () => setDeleteUserVisibility(!deleteUserVisibility);
  const handleShare = (link) => {
    setShareVisibility(!shareVisibility);
    setShareLink(link);
  };

  return (
    <AppContext.Provider
      value={{
        menuVisibility,
        searchVisibility,
        logOutVisibility,
        deleteUserVisibility,
        shareVisibility,
        shareLink,
        handleShare,
        handleMenuVisibility,
        handleSearchVisibility,
        handleLogOutVisibility,
        handleDeleteUserVisibility,
      }}>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAppContext = () => useContext(AppContext);
