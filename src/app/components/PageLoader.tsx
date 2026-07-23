import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import logo2Url from '@/imports/logo2.svg';

const INITIAL_LOAD_TIME = 1650;
const ROUTE_LOAD_TIME = 800;
const REVEAL_TIME = 1550;

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
      }, REVEAL_TIME);
    }, firstRender.current ? INITIAL_LOAD_TIME : ROUTE_LOAD_TIME);
    return () => { clearTimeout(hideTimer); clearTimeout(removeTimer); };
  }, [location.pathname]);

  if (!isVisible) return null;
  return (
    <div className={`page-loader${isLeaving ? ' page-loader--leaving' : ''}`} role="status" aria-live="polite" aria-label="Загрузка страницы">
      <div className="page-loader__curtain" />
      <div className="page-loader__pattern" />
      <div className="page-loader__mark">
        <img src={logo2Url} alt="ГПИ Инжиниринг" className="page-loader__logo" />
      </div>
      <span className="page-loader__line" />
    </div>
  );
}
