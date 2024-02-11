import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { BsMusicNoteBeamed } from 'react-icons/bs';
import { AiOutlineCalendar, AiOutlineFieldTime } from 'react-icons/ai';

import Empty from '@Components/Empty/Empty';
import Track from '@Components/Tracks/Track';
import ListSubMenu from '@Components/SubMenu/ListSubMenu';

function TracksList({ tracks, sort }) {
  const [sortedTracks, setSortedTracks] = useState(tracks);

  useEffect(() => setSortedTracks(tracks), [tracks]);

  return tracks.length ? (
    <div className="max-w-5xl w-full mx-auto @2xl:pt-5">
      <div className="relative flex items-center gap-5 px-1.5 text-md font-medium mb-2">
        <div className="flex-1 @2xl:flex-initial w-auto @2xl:w-11 self-end opacity-100 @2xl:opacity-0">
          {sort && 'Tracks'}
        </div>
        <div className="hidden @2xl:grid grid-cols-2 flex-1 gap-5">
          <div>Track</div>
          <div>Artist</div>
        </div>
        <div className="hidden @4xl:flex">
          <AiOutlineCalendar className="m-auto w-32" size={22} />
          <AiOutlineFieldTime className="m-auto w-16" size={22} />
        </div>
        <div className="flex">
          <div className="w-11"></div>
          {sort ? (
            <ListSubMenu setSortedTracks={setSortedTracks} tracks={sortedTracks} />
          ) : (
            <div className="w-11"></div>
          )}
        </div>
      </div>
      <div className="grid gap-1.5 border-t-2 border-solid border-gray-opacity pt-4">
        {sortedTracks.map((track, index) => (
          <Track tracks={sortedTracks} index={index} key={track._id} data={track} />
        ))}
      </div>
    </div>
  ) : (
    <Empty Icon={BsMusicNoteBeamed} text="No tracks" />
  );
}

TracksList.propTypes = {
  tracks: PropTypes.array.isRequired,
  sort: PropTypes.bool,
};

export default TracksList;
