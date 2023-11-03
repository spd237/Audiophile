import { useState, useEffect } from 'react';

export function useDetectClick(
  ref: React.RefObject<HTMLDivElement | HTMLFormElement>,
  buttonRef: React.RefObject<HTMLButtonElement>
): [boolean, React.Dispatch<React.SetStateAction<boolean>>] {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return [isOpen, setIsOpen];
}
