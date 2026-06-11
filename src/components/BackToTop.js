import { useEffect, useState } from 'react';

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fn = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 w-11 h-11 bg-accent text-white text-sm font-bold rounded-lg shadow-lg transition-all duration-300 hover:opacity-90 ${
        show ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      ↑
    </button>
  );
};

export default BackToTop;
