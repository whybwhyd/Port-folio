import React from 'react';
import * as St from './style';

const Portfolio = () => {
  const listArray = [1, 2, 3, 4, 5, 6, 7];
  const list = listArray
    .slice(0, 3)
    .map((item) => <St.Card key={item}>{item}</St.Card>);
  return (
    <St.ListFrame>
      <div>Portfolio</div>
      <div>{list}</div>
    </St.ListFrame>
  );
};

export default Portfolio;
