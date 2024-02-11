import { useNavigate } from 'react-router-dom';

import Text from '@UI/Text/Text';
import Modal from '@Components/Modals/Modal';

import { useActions } from '@Hooks/useActions';
import { useAppContext } from '@Providers/AppProvider';

export default function LogoutModal() {
  const { logOut } = useActions();
  const { logOutVisibility, handleLogOutVisibility } = useAppContext();
  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate('/user/sign-in');
    logOut();
    handleLogOutVisibility();
  };

  return (
    <Modal
      visibility={logOutVisibility}
      handler={handleLogOutVisibility}
      title="Log Out"
      accept={handleLogOut}
      cancel>
      <Text>Do you really want to log out?</Text>
    </Modal>
  );
}
