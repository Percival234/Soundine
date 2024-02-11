import React from 'react';
import PropTypes from 'prop-types';

import formatNumber from '@Helpers/formaters/formatNumber';

function TotalContainer({ tracks, followers, playlists, artists }) {
  return (
    <div className="flex items-center gap-1 text-xs md:text-sm opacity-80 whitespace-nowrap">
      {[
        tracks && <div>{formatNumber(tracks.length)} Traсks</div>,
        followers !== undefined && <div>{formatNumber(followers)} Followers</div>,
        playlists && <div>{formatNumber(playlists.length)} Playlists</div>,
        artists && <div>{formatNumber(artists.length)} Artists</div>,
      ]
        .filter(Boolean)
        .map((element, index, array) => (
          <React.Fragment key={index}>
            {element}
            {index < array.length - 1 && '~'}
          </React.Fragment>
        ))}
    </div>
  );
}

TotalContainer.propTypes = {
  tracks: PropTypes.array,
  followers: PropTypes.number,
  playlists: PropTypes.array,
  artists: PropTypes.array,
};

export default TotalContainer;
