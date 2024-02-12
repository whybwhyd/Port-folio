import React, { useState } from 'react';
import * as St from './style';
import arrow from '../../../assets/arrow.png';
import listMenu from '../../../assets/listMenu.png';

const Portfolio = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const listArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const list = listArray
    .slice(0, 3)
    .map((item) => <St.Card key={item}>{item}</St.Card>);
  const listDropDown = () => {
    setShowDropDown(!showDropDown);
  };
  return (
    <St.TotalFrame>
      <St.ListMenu alt="리스트 메뉴" src={listMenu} onClick={listDropDown} />
      <St.ListFrame>
        <St.LeftArrow alt="왼쪽 화살표" src={arrow} />
        <St.Scene>
          <St.CardFrame>
            <>{list}</>
          </St.CardFrame>
        </St.Scene>
        <St.RightArrow alt="왼쪽 화살표" src={arrow} />
      </St.ListFrame>
    </St.TotalFrame>
  );
};

export default Portfolio;
