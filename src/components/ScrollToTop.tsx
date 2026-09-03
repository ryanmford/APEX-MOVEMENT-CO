import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force instant scroll to avoid CSS scroll-behavior: smooth causing issues
    // where the page changes height mid-scroll and lands in the middle.
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' } as any);
    
    // Restore smooth scroll after a brief delay
    const timeoutId = setTimeout(() => {
      document.documentElement.style.scrollBehavior = '';
    }, 10);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}
