import React from 'react';
import * as St from './style';
import arrow from '../../../assets/arrow.png';

const Portfolio = () => {
  const listArray = [1, 2, 3, 4, 5, 6, 7];
  const list = listArray
    .slice(0, 3)
    .map((item) => <St.Card key={item}>{item}</St.Card>);
  return (
    <div>
      <div>Portfolio</div>
      <St.ListFrame>
        <St.LeftArrow alt="왼쪽 화살표" src={arrow} />
        <>{list}</>
        <St.RightArrow alt="왼쪽 화살표" src={arrow} />
      </St.ListFrame>
    </div>
  );
};

export default Portfolio;
