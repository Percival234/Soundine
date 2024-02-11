import PropTypes from 'prop-types';
import { AiOutlineTeam } from 'react-icons/ai';

import Empty from '@Components/Empty/Empty';
import ArtistCard from '@Components/Artist/ArtistCard';
import GridContainer from '@UI/Containers/GridContainer';

function ArtistsList({ artists }) {
  return artists.length ? (
    <GridContainer>
      {artists.map((artist) => (
        <ArtistCard key={artist._id} data={artist} />
      ))}
    </GridContainer>
  ) : (
    <Empty Icon={AiOutlineTeam} text="No artists" />
  );
}

ArtistsList.propTypes = {
  artists: PropTypes.array.isRequired,
};

export default ArtistsList;
