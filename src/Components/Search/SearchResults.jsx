import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineStop } from 'react-icons/ai';

import Empty from '@Components/Empty/Empty';
import Error from '@Components/Error/Error';
import ImageCover from '@UI/Images/ImageCover';
import TagsList from '@Components/Tags/TagsList';
import SearchLink from '@Components/Search/SearchLink';
import ImageContainer from '@UI/Containers/ImageContainer';
import ContainerRounded from '@UI/Containers/ContainerRounded';

import { useLazySearchQuery } from '@Redux/APIEndpoints/searchEndpoints';

import { useAppContext } from '@Providers/AppProvider';

import { SERVER_URL, TAGS } from '@Constants/Constants';

function SearchResults({ searchValue }) {
  const { handleSearchVisibility } = useAppContext();

  const [search, { data, isError, error }] = useLazySearchQuery();

  const tags = [...TAGS].map((tag) => tag.tag).filter((tag) => tag.match(searchValue));

  useEffect(() => {
    search({ query: searchValue, limit: 5 });
  }, [searchValue, search]);

  if (isError) return <Error error={error} />;

  return tags.length || data?.tracks?.length || data?.artists?.length || data?.playlists?.length ? (
    <ContainerRounded className="bg-white overflow-scroll">
      {tags.length > 0 && (
        <div className="border-b border-solid border-gray-opacity pb-3">
          <TagsList onClick={handleSearchVisibility} tags={tags} />
        </div>
      )}
      {data?.tracks?.length > 0 && (
        <div className="border-b border-solid border-gray-opacity pb-3">
          <h4 className="mb-2">Tracks</h4>
          <div className="flex flex-wrap gap-2">
            {data.tracks.map((track) => (
              <SearchLink
                to={`/music/tracks/${track._id}`}
                className="py-1 px-3 flex-col"
                key={track._id}>
                <div className="font-fold">{track.name}</div>
                <div className="text-xs">{track.artists.join(', ')}</div>
              </SearchLink>
            ))}
          </div>
        </div>
      )}
      {data?.artists?.length > 0 && (
        <div className="border-b border-solid border-gray-opacity pb-3">
          <h4 className="mb-2">Artists</h4>
          <div className="flex flex-wrap gap-2">
            {data.artists.map((artist) => (
              <SearchLink
                to={`/music/artists/${artist.name}`}
                className="gap-2 items-center p-1 pr-3"
                key={artist._id}>
                <ImageContainer className="w-10 min-w-0" type="square">
                  <ImageCover
                    src={`${SERVER_URL}/static/images/artists/${artist.image}`}
                    alt={artist.name}
                  />
                </ImageContainer>
                <div>{artist.name}</div>
              </SearchLink>
            ))}
          </div>
        </div>
      )}
      {data?.playlists?.length > 0 && (
        <div className="border-b border-solid border-gray-opacity pb-3">
          <h4 className="mb-2">Playlists</h4>
          <div className="flex flex-wrap gap-2">
            {data.playlists.map((playlist) => (
              <SearchLink
                to={`/music/playlists/${playlist._id}`}
                className="gap-2 items-center p-1 pr-3"
                key={playlist._id}>
                <ImageContainer className="w-10 min-w-0" type="square">
                  <ImageCover
                    src={`${SERVER_URL}/static/images/playlists/${playlist.image}`}
                    alt={playlist.name}
                  />
                </ImageContainer>
                <div>{playlist.name}</div>
              </SearchLink>
            ))}
          </div>
        </div>
      )}
    </ContainerRounded>
  ) : (
    <Empty text="Sorry, but your search yielded no results" Icon={AiOutlineStop} />
  );
}

SearchResults.propTypes = {
  searchValue: PropTypes.string.isRequired,
};

export default SearchResults;
