import PropTypes from 'prop-types';
import { AiOutlineSortAscending } from 'react-icons/ai';

import ButtonRounded from '@UI/Buttons/ButtonRounded';
import SubMenuItem from '@Components/SubMenu/SubMenuItem';

import { useOutsideClick } from '@Hooks/useOutSideClick';
import { useActions } from '@Hooks/useActions';

function ListSubMenu({ setSortedTracks, tracks }) {
  const [visibility, handleVisibility, ref] = useOutsideClick();
  const { setTracks } = useActions();

  const sortBy = (compareFn) => {
    const sortedTracks = [...tracks];
    sortedTracks.sort(compareFn);
    setSortedTracks(sortedTracks);
    setTracks({ tracks: sortedTracks, index: 0 });
  };

  const sortByPopularity = () => sortBy((a, b) => b.followers - a.followers);
  const sortByAlphabet = () => sortBy((a, b) => a.name.localeCompare(b.name));
  const sortByDuration = () => sortBy((a, b) => b.duration - a.duration);
  const sortByDate = () => sortBy((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
  const sortRandomly = () => sortBy(() => Math.random() - 0.5);

  return (
    <>
      <ButtonRounded aria-label="change tracks order" className="p-2.5" onClick={handleVisibility}>
        <AiOutlineSortAscending />
      </ButtonRounded>
      {visibility && (
        <div
          ref={ref}
          className="grid absolute right-12 top-5 rounded-md border border-solid border-gray-opacity overflow-hidden bg-white dark:bg-zinc-800 z-50">
          <SubMenuItem text="By popularity" onClick={sortByPopularity} />
          <SubMenuItem text="By alphabet" onClick={sortByAlphabet} />
          <SubMenuItem text="By duration" onClick={sortByDuration} />
          <SubMenuItem text="By release date" onClick={sortByDate} />
          <SubMenuItem text="Random order" onClick={sortRandomly} />
        </div>
      )}
    </>
  );
}

ListSubMenu.propTypes = {
  setSortedTracks: PropTypes.func.isRequired,
  tracks: PropTypes.array.isRequired,
};

export default ListSubMenu;
