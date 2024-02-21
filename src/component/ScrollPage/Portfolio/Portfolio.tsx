import React, { useState } from 'react';
import * as St from './style';
import arrow from '../../../assets/arrow.png';
import listMenu from '../../../assets/listMenu.png';
import { useModal } from '../../Modal/Modal.hooks';
import Dropdown from './Dropdown';
import ConfirmMessage from './ConfirmMessage';

const Portfolio = () => {
  const { mount, centerMount } = useModal();
  const [count, setCount] = useState(0);
  const listArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const listDeleteHandler = () => {
    centerMount('ConfirmMessage', <ConfirmMessage />);
  };
  const list = listArray.slice(count, count + 3).map((item) => (
    <St.Card key={item}>
      <>{item}</>
      <St.CardDelete onClick={listDeleteHandler}>X</St.CardDelete>
    </St.Card>
  ));

  const listDropDown = () => {
    const customStyle = { top: '29.5%', right: '21.5%' };
    mount('Dropdown', <Dropdown />, customStyle);
  };

  const plusArrowHandler = () => {
    if (count < 0) return setCount(0);
    if (count >= 0) {
      setCount(Math.min(count + 1, listArray.length - 3));
    }
    if (count === listArray.length - 3) {
      alert('마지막 슬라이드 입니다!');
      return;
    }
  };
  const minusArrowHandler = () => {
    if (count > listArray.length - 1) return setCount(listArray.length - 1);
    if (count > 0) {
      setCount(Math.max(count - 1, 0));
    }
    if (count === 0) {
      alert('첫 번째 슬라이드 입니다!');
      return;
    }
  };
  return (
    <St.TotalFrame>
      <St.ListMenuFrame onClick={listDropDown}>
        <St.ListMenu alt="리스트 메뉴" src={listMenu} />
      </St.ListMenuFrame>
      <St.ListFrame>
        <St.LeftArrow
          alt="왼쪽 화살표"
          src={arrow}
          onClick={minusArrowHandler}
        />
        <St.Scene>
          <St.CardFrame>
            <>{list}</>
          </St.CardFrame>
        </St.Scene>
        <St.RightArrow
          alt="왼쪽 화살표"
          src={arrow}
          onClick={plusArrowHandler}
        />
      </St.ListFrame>
    </St.TotalFrame>
  );
};

export default Portfolio;
