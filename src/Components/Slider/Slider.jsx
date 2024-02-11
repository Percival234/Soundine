import PropTypes from 'prop-types';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import 'swiper/css';

import LinkMore from '@UI/Links/LinkMore';
import SubTitle from '@UI/Titles/SubTitle';
import LinkScroll from '@UI/Links/LinkScroll';
import TagCard from '@Components/Tags/TagCard';
import ButtonRounded from '@UI/Buttons/ButtonRounded';
import ArtistCard from '@Components/Artist/ArtistCard';
import PlaylistCard from '@Components/Playlist/PlaylistCard';

function Slider({ type, title, data, to }) {
  const id = (Math.random() * 100000).toFixed();

  const swiperSettings = {
    modules: [Navigation],
    grabCursor: true,
    speed: 600,
    slidesPerView: 1,
    slidesPerGroup: 2,
    breakpoints: {
      '@0.25': {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      '@0.75': {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      '@1.25': {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      '@1.50': {
        slidesPerView: 5,
        spaceBetween: 25,
      },
    },
    navigation: {
      prevEl: `.swiper-prev-${id}`,
      nextEl: `.swiper-next-${id}`,
    },
  };

  const types = {
    artist: ArtistCard,
    playlist: PlaylistCard,
    tag: TagCard,
  };

  return (
    <>
      <div className="flex items-center gap-3 justify-between">
        <LinkScroll to={to}>
          <SubTitle hash>{title}</SubTitle>
        </LinkScroll>
        <div className="flex gap-1">
          <ButtonRounded aria-label="slide to prev" className={`swiper-prev-${id}`}>
            <AiOutlineLeft />
          </ButtonRounded>
          <ButtonRounded aria-label="slide to next" className={`swiper-next-${id}`}>
            <AiOutlineRight />
          </ButtonRounded>
        </div>
      </div>
      <Swiper {...swiperSettings} className="w-full">
        {data.map((item, index) => {
          const Element = types[type];
          return (
            <SwiperSlide key={index}>
              <Element key={item._id} data={item} />
            </SwiperSlide>
          );
        })}
        <SwiperSlide>
          <LinkMore
            className={type === 'artist' ? 'h-auto aspect-square rounded-full' : ''}
            to={to}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

Slider.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  to: PropTypes.string,
};

export default Slider;
