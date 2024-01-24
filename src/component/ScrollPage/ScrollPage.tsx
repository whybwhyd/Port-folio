import React, { useEffect, useRef } from 'react';
import * as St from './style';

const ScrollPage = () => {
  const outerDivRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wheelhandler = (e: WheelEvent) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current || { scrollTop: 0 };
      const pageHeight = window.innerHeight;
      const pageIndex = Math.floor(scrollTop / pageHeight);

      if (deltaY > 0) {
        outerDivRef?.current?.scrollTo({
          top: pageHeight * (pageIndex + 1),
          left: 0,
          behavior: 'smooth',
        });
      } else {
        outerDivRef?.current?.scrollTo({
          top: pageHeight * (pageIndex - 1),
          left: 0,
          behavior: 'smooth',
        });
      }
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent?.addEventListener('wheel', wheelhandler);
    return () => {
      outerDivRefCurrent?.removeEventListener('wheel', wheelhandler);
    };
  }, []);

  return (
    <St.Outer ref={outerDivRef}>
      <St.Home>Home</St.Home>
      <St.Portfolio>portfolio</St.Portfolio>
      <St.AboutMe>about me</St.AboutMe>
      <St.Skills>skills</St.Skills>
      <St.Contact>contact</St.Contact>
    </St.Outer>
  );
};

export default ScrollPage;
