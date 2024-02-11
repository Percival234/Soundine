import PropTypes from 'prop-types';
import { AiOutlinePlaySquare } from 'react-icons/ai';

import Empty from '@Components/Empty/Empty';
import GridContainer from '@UI/Containers/GridContainer';
import PlaylistCard from '@Components/Playlist/PlaylistCard';

function PlaylistList({ playlists }) {
  return playlists.length > 0 ? (
    <GridContainer>
      {playlists.map((playlist) => (
        <PlaylistCard key={playlist._id} data={playlist} />
      ))}
    </GridContainer>
  ) : (
    <Empty Icon={AiOutlinePlaySquare} text="No playlists" />
  );
}

PlaylistList.propTypes = {
  playlists: PropTypes.array,
};

export default PlaylistList;
