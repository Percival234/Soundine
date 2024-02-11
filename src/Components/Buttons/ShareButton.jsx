import PropTypes from 'prop-types';
import { AiOutlineShareAlt } from 'react-icons/ai';

import ButtonRounded from '@UI/Buttons/ButtonRounded';

import { useAppContext } from '@Providers/AppProvider';

function ShareButton({ link }) {
  const { handleShare } = useAppContext();
  const handleShareModal = () => handleShare(link || '');
  return (
    <ButtonRounded aria-label="open share modal" onClick={handleShareModal}>
      <AiOutlineShareAlt />
    </ButtonRounded>
  );
}

ShareButton.propTypes = {
  link: PropTypes.string,
};

export default ShareButton;
