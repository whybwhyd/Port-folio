import React, { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { hrefRefsState } from '../../recoil/hrefRefsState';
import * as St from './style';
import Portfolio from './Portfolio/Portfolio';

const ScrollPage = () => {
  const outerDivRef = useRef<HTMLDivElement | null>(null);
  const [hrefRefs, setHrefRefs] = useRecoilState(hrefRefsState);
  const href1 = useRef<HTMLDivElement>(null);
  const href2 = useRef<HTMLDivElement>(null);
  const href3 = useRef<HTMLDivElement>(null);
  const href4 = useRef<HTMLDivElement>(null);
  const href5 = useRef<HTMLDivElement>(null);

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
        console.log(pageHeight * (pageIndex + 1));
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

  useEffect(() => {
    setHrefRefs({
      ...hrefRefs,
      href1,
      href2,
      href3,
      href4,
      href5,
    });
  }, []);

  return (
    <St.Outer ref={outerDivRef}>
      <St.Home ref={href1}>Home</St.Home>
      <St.Portfolio ref={href2}>
        <Portfolio />
      </St.Portfolio>
      <St.AboutMe ref={href3}>about me</St.AboutMe>
      <St.Skills ref={href4}>skills</St.Skills>
      <St.Contact ref={href5}>contact</St.Contact>
    </St.Outer>
  );
};

export default ScrollPage;
