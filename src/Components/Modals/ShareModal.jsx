import { useLocation } from 'react-router-dom';
import { AiOutlineCopy } from 'react-icons/ai';

import Text from '@UI/Text/Text';
import Modal from '@Components/Modals/Modal';
import ButtonRounded from '@UI/Buttons/ButtonRounded';

import { useAppContext } from '@Providers/AppProvider';

export default function ShareModal() {
  const { pathname } = useLocation();
  const { shareVisibility, handleShare, shareLink } = useAppContext();

  const addToClipboard = () =>
    navigator.clipboard.writeText(`${location.origin}${shareLink || pathname}`);

  const handleShareModal = () => handleShare('');

  return (
    <Modal visibility={shareVisibility} handler={handleShareModal} title="Share" cancel>
      <Text>Copy the link and share it with friends!</Text>
      <div className="flex border border-solid border-gray-opacity rounded-lg bg-gray-opacity">
        <input
          id="share"
          className="px-3 text-base overflow-auto"
          disabled
          type="text"
          onChange={() => {}}
          value={`${location.origin}${shareLink || pathname}`}
        />
        <ButtonRounded onClick={addToClipboard}>
          <AiOutlineCopy />
        </ButtonRounded>
      </div>
    </Modal>
  );
}
