import React from 'react';
import PropTypes from 'prop-types';

import LinkUnderline from '@UI/Links/LinkUnderline';

function ArtistsRow({ artists }) {
  return (
    <div className="inline">
      {artists.map((artist, index) => (
        <React.Fragment key={index}>
          <LinkUnderline to={`/music/artists/${artist}`}>{artist}</LinkUnderline>
          {index < artists.length - 1 && ', '}
        </React.Fragment>
      ))}
    </div>
  );
}

ArtistsRow.propTypes = {
  artists: PropTypes.array.isRequired,
};

export default ArtistsRow;
