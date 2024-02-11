import PropTypes from 'prop-types';
import { Form } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';

import ButtonRounded from '@UI/Buttons/ButtonRounded';

import useDebounce from '@Hooks/useDebounce';

function SearchForm({ setSearchValue }) {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, 1000);
  const searchRef = useRef(null);

  const clear = () => setValue('');

  const handleValue = (event) => setValue(event.target.value.toLowerCase());

  useEffect(() => searchRef.current.focus(), []);

  useEffect(() => {
    setSearchValue(debouncedValue);
  }, [debouncedValue, setSearchValue]);

  return (
    <Form id="search" className="flex rounded-lg bg-white dark:bg-zinc-900">
      <div className="relative flex flex-1 items-center">
        <div className="p-2.5">
          <AiOutlineSearch size={25} />
        </div>
        <input
          id="search-input"
          type="text"
          className="py-1 pl-2"
          placeholder="Search"
          value={value}
          onChange={handleValue}
          ref={searchRef}
        />
        {!!value && (
          <ButtonRounded onClick={clear}>
            <AiOutlineClose />
          </ButtonRounded>
        )}
      </div>
    </Form>
  );
}

SearchForm.propTypes = {
  setSearchValue: PropTypes.func.isRequired,
};

export default SearchForm;
