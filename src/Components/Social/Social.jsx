import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';

import ButtonRounded from '@UI/Buttons/ButtonRounded';
import ContainerRounded from '@UI/Containers/ContainerRounded';

export default function Social() {
  return (
    <ContainerRounded className="gap-0 md:gap-0 justify-between p-1.5 md:p-1.5">
      <ButtonRounded
        aria-label="go to facebook"
        className="hover:text-[#1877F2] active:text-[#1877F2]">
        <AiOutlineFacebook />
      </ButtonRounded>
      <ButtonRounded
        aria-label="go to twitter"
        className="hover:text-[#1DA1F2] active:text-[#1DA1F2]">
        <AiOutlineTwitter />
      </ButtonRounded>
      <ButtonRounded
        aria-label="go to instagram"
        className="hover:text-[#C13584] active:text-[#C13584]">
        <AiOutlineInstagram />
      </ButtonRounded>
    </ContainerRounded>
  );
}
