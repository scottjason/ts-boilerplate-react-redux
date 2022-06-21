import * as React from 'react';
import { useAppSelector } from './useAppSelector';
import { isOpen } from '../features/modal/modalSlice';

export const useEscape = () => {
  const isModalOpen = useAppSelector(isOpen);
  const [isEscapeEvent, setIsEscapeEvent] = React.useState<boolean>(false);

  const onEscape = React.useCallback(
    (event: KeyboardEvent) => {
      const isEscape: boolean = event.key === 'Escape';
      if (isEscape && isModalOpen) {
        setIsEscapeEvent(true);
      }
    },
    [isModalOpen, isEscapeEvent, setIsEscapeEvent]
  );

  React.useEffect(() => {
    document.addEventListener('keydown', onEscape);
    return () => {
      document.removeEventListener('keydown', onEscape);
    };
  }, [onEscape]);

  return {
    isEscapeEvent,
    setIsEscapeEvent,
  };
};
