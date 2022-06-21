import * as React from 'react';
import { isOpen } from '../features/modal/modalSlice';
import { useAppSelector } from '../hooks/useAppSelector';

export const useIsClickOutside = (initialState: boolean) => {
  const ref = React.useRef(null);
  const isModalOpen = useAppSelector(isOpen);
  const [isClickOutside, setisClickOutside] = React.useState(initialState);

  const handleClickOutside = (event: MouseEvent): void => {
    if (ref.current && !ref.current.contains(event.target)) {
      setisClickOutside(true);
    }
  };

  React.useEffect(() => {
    if (!isModalOpen && isClickOutside) {
      setisClickOutside(false);
    }
  }, [isModalOpen]);

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return { ref, isClickOutside, setisClickOutside };
};
