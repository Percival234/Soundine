import Text from '@UI/Text/Text';
import Modal from '@Components/Modals/Modal';

import { useActions } from '@Hooks/useActions';
import { useAppContext } from '@Providers/AppProvider';
import { useDeleteUserMutation } from '@Redux/APIEndpoints/userEndpoints';

export default function DeleteModal() {
  const { logOut } = useActions();
  const [deleteUser] = useDeleteUserMutation();
  const { deleteUserVisibility, handleDeleteUserVisibility } = useAppContext();

  const handleDeleteUser = () => {
    deleteUser();
    logOut();
  };

  return (
    <Modal
      visibility={deleteUserVisibility}
      handler={handleDeleteUserVisibility}
      title="Delete account"
      accept={handleDeleteUser}
      cancel>
      <Text>
        Do you confirm the account deletion?
        <br /> All data will be destroyed!
      </Text>
    </Modal>
  );
}
