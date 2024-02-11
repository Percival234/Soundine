import { useState } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

import ButtonRounded from '@UI/Buttons/ButtonRounded';

function InputField({ id, label, type, value, ...props }) {
  const [passVisible, setPassVisible] = useState(type === 'password');

  function handlePasswordVisibility() {
    setPassVisible(!passVisible);
  }

  return (
    <div className="relative flex items-center">
      <input
        id={id}
        value={value}
        {...props}
        type={passVisible ? 'password' : 'text'}
        className="px-2 py-1.5 md:py-2 md:px-3 border border-solid border-zinc-500 rounded peer focus:border-main focus:text-main"
      />
      <label
        className={`absolute top-1/2 -translate-y-1/2 left-2 px-2 bg-white text-sm md:text-base text-zinc-800 duration-300 dark:bg-zinc-900 dark:text-zinc-400 peer-focus:text-main peer-focus:text-sm peer-focus:top-0 ${
          value ? 'text-xs md:text-sm top-[0px]' : ''
        }`}
        htmlFor={id}>
        {label}
      </label>
      {type === 'password' && (
        <ButtonRounded
          onClick={handlePasswordVisibility}
          className="absolute right-0 peer-focus:text-main">
          {passVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </ButtonRounded>
      )}
    </div>
  );
}

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default InputField;
