import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from './ui/logo';

const INITIAL_LOAD_TIME = 1450;
const ROUTE_LOAD_TIME = 800;
const FADE_TIME = 850;

export function PageLoader() {
  const location = useLocation();
  const firstRender = useRef(true);
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    let removeTimer: ReturnType<typeof setTimeout>;
    setIsVisible(true);
    setIsLeaving(false);
    const hideTimer = setTimeout(() => {
      setIsLeaving(true);
      removeTimer = setTimeout(() => {
        setIsVisible(false);
        firstRender.current = false;
      }, FADE_TIME);
    }, firstRender.current ? INITIAL_LOAD_TIME : ROUTE_LOAD_TIME);
    return () => { clearTimeout(hideTimer); clearTimeout(removeTimer); };
  }, [location.pathname]);

  if (!isVisible) return null;
  return (
    <div className={`page-loader${isLeaving ? ' page-loader--leaving' : ''}`} role="status" aria-live="polite" aria-label="Загрузка страницы">
      <div className="page-loader__pattern" />
      <div className="page-loader__mark"><Logo width={520} fill="#aeb8c2" className="page-loader__logo" /></div>
      <span className="page-loader__line" />
    </div>
  );
}
