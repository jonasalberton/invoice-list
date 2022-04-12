import { useEffect } from "react";

const usePressEscape = (callback: () => void) => {

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key !== 'Escape') return;
    callback();
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  });
};

export default usePressEscape;
