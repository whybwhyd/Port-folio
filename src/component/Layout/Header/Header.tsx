import * as St from './style';

import React from 'react';
import { useModal } from 'component/Modal/Modal.hooks';
import { useRecoilState } from 'recoil';
import { hrefRefsState } from '../../../recoil/hrefRefsState';
import menu from '../../../assets/menu.png';
import Login from 'component/Login/Login';

const Header = () => {
  const { centerMount } = useModal();

  const modalOpen = () => {
    centerMount('login', <Login />);
  };
  const [hrefRefs] = useRecoilState(hrefRefsState);

  const clickScrollHome = () => {
    hrefRefs.href1.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const clickScrollPf = () => {
    hrefRefs.href2.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const clickScrollAm = () => {
    hrefRefs.href3.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const clickScrollSk = () => {
    hrefRefs.href4.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const clickScrollCt = () => {
    hrefRefs.href5.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <St.HeaderWrapper>
      <St.HeaderContents>
        <div onClick={clickScrollHome}>로고</div>

        <St.NavWrapper>
          <St.NavContents>
            <li onClick={clickScrollPf}>portfolio</li>
            <li onClick={clickScrollAm}>about me</li>
            <li onClick={clickScrollSk}>skills</li>
            <li onClick={clickScrollCt}>contact</li>
          </St.NavContents>
        </St.NavWrapper>
        <St.HeaderLoginBtn onClick={modalOpen}>Login</St.HeaderLoginBtn>
        <St.HeaderMenuImg src={menu} alt="메뉴" />
      </St.HeaderContents>
    </St.HeaderWrapper>
  );
};

export default Header;
