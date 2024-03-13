import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import ButtonRounded from '@UI/Buttons/ButtonRounded';

import { useToggleFavoritesMutation } from '@Redux/APIEndpoints/userEndpoints';

function LikeButton({ id, type, className }) {
  const user = useSelector((state) => state.user.user);
  const [isFavorite, setFavorite] = useState(
    user?.favorites?.[type].some((item) => item._id === id || false)
  );
  const [toggleFavorites] = useToggleFavoritesMutation();

  const changeFav = () => {
    toggleFavorites({ id, type });
    setFavorite(!isFavorite);
  };

  return (
    <ButtonRounded aria-label="add to favorites" onClick={changeFav} className={className}>
      <div className="text-pink-500">{isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}</div>
    </ButtonRounded>
  );
}

LikeButton.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default LikeButton;
