import { AiOutlineTrophy } from 'react-icons/ai';

import Text from '@UI/Text/Text';
import SubTitle from '@UI/Titles/SubTitle';
import ImageCover from '@UI/Images/ImageCover';
import LinkRounded from '@UI/Links/LinkRounded';
import ContainerRounded from '@UI/Containers/ContainerRounded';

import Image from '@Assets/Image/singers.png';

export default function TopCard() {
  return (
    <ContainerRounded className="flex-1 flex flex-col items-start overflow-hidden md:p-6 isolate">
      <SubTitle>Popular</SubTitle>
      <Text className="max-w-xs text-left">
        Explore the best of the best! Here is a collection of the best songs today!
      </Text>
      <LinkRounded aria-label="navigate to popular" to="/popular">
        <AiOutlineTrophy size={40} />
      </LinkRounded>
      <ImageCover src={Image} alt="artists" />
    </ContainerRounded>
  );
}
