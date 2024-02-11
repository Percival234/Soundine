import { useState, useEffect, useRef, useCallback } from 'react';

export function useOutsideClick() {
  const [visibility, setVisibility] = useState(false);
  const ref = useRef(null);

  function handleVisibility(event) {
    event.stopPropagation();
    setVisibility(!visibility);
  }

  const handleClickOutside = useCallback(() => setVisibility(false), []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  return [visibility, handleVisibility, ref];
}
