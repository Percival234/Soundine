import PropTypes from 'prop-types';

import Text from '@UI/Text/Text';
import ContainerRounded from '@UI/Containers/ContainerRounded';

function Empty({ text, Icon }) {
  return (
    <ContainerRounded className="items-center text-center text-zinc-600 dark:text-white opacity-80 px-5 md:py-20">
      <Icon size={60} />
      <Text className="lg:text-2xl">{text}</Text>
    </ContainerRounded>
  );
}

Empty.propTypes = {
  text: PropTypes.string.isRequired,
  Icon: PropTypes.func,
};

export default Empty;
