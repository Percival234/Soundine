import TitleMain from '@UI/Titles/TitleMain';
import TagCard from '@Components/Tags/TagCard';
import GridContainer from '@UI/Containers/GridContainer';
import ContainerRounded from '@UI/Containers/ContainerRounded';

import { TAGS } from '@Constants/Constants';

export default function Tags() {
  return (
    <ContainerRounded>
      <TitleMain>Choose Tag and Dive into the World of Sounds</TitleMain>
      <GridContainer>
        {TAGS.map((tag, index) => {
          return <TagCard data={tag} key={index} />;
        })}
      </GridContainer>
    </ContainerRounded>
  );
}
