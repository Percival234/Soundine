import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { twMerge } from 'tailwind-merge';
import { useCallback, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import Button from '@UI/Buttons/Button';
import SubTitle from '@UI/Titles/SubTitle';
import ButtonRounded from '@UI/Buttons/ButtonRounded';
import ButtonOutline from '@UI/Buttons/ButtonOutline';

function Modal({ children, visibility, handler, title, cancel, accept, className }) {
  const classes = twMerge(
    'animate-bounceIn -translate-y-full relative opacity-0 flex flex-col gap-4 mx-auto max-w-2xl rounded-lg p-5 bg-zinc-100 dark:bg-zinc-800 dark:text-white',
    className
  );

  function handleModalVisibility(event) {
    if (event.target === event.currentTarget) handler();
  }

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === 'Escape' && visibility) {
        handler();
      }
    },
    [handler, visibility]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [visibility, handleKeyPress]);

  useEffect(() => {
    if (visibility) document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, [visibility]);

  return (
    visibility &&
    createPortal(
      <div
        onClick={handleModalVisibility}
        className="fixed top-0 left-0 bottom-0 right-0 bg-[#00000080] overflow-y-auto flex lg:justify-center items-baseline px-2 py-16 lg:py-28">
        <div className={classes}>
          <ButtonRounded className="absolute top-1.5 right-1.5" onClick={handleModalVisibility}>
            <AiOutlineClose />
          </ButtonRounded>
          <SubTitle className="mx-auto">{title}</SubTitle>
          {children}
          <div className="flex gap-2 justify-between items-center">
            {cancel && <ButtonOutline onClick={handleModalVisibility}>Cancel</ButtonOutline>}
            {accept && <Button onClick={accept}>Accept</Button>}
          </div>
        </div>
      </div>,
      document.getElementById('modal')
    )
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
