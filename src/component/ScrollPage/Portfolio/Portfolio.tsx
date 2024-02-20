import React, { useState } from 'react';
import * as St from './style';
import arrow from '../../../assets/arrow.png';
import listMenu from '../../../assets/listMenu.png';
import Dropdown from './Dropdown/Dropdown';

const Portfolio = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [count, setCount] = useState(0);
  const listArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const list = listArray
    .slice(count, count + 3)
    .map((item) => <St.Card key={item}>{item}</St.Card>);
  const listDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const plusArrowHandler = () => {
    if (count < 0) return setCount(0);
    if (count >= 0) {
      setCount(Math.min(count + 1, listArray.length - 3));
    }
  };
  const minusArrowHandler = () => {
    if (count > listArray.length - 1) return setCount(listArray.length - 1);
    if (count > 0) {
      setCount(Math.max(count - 1, 0));
    }
  };
  return (
    <St.TotalFrame>
      <St.ListMenuFrame>
        <label onClick={listDropDown}>
          <St.ListMenu alt="리스트 메뉴" src={listMenu} />
        </label>
        {showDropDown && <Dropdown />}
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
