import React from 'react';
import * as St from './style';

const Dropdown = () => {
  const listToAddHandler = () => {
    console.log(1);
  };
  const listToUpdateHandler = () => {
    console.log(1);
  };
  // const listToDeleteHandler = () => {
  //   console.log(1);
  // };
  return (
    <St.DropdownFrame>
      <St.AddListButton onClick={listToAddHandler}>추가하기</St.AddListButton>
      <St.AddListButton onClick={listToUpdateHandler}>
        수정하기
      </St.AddListButton>
    </St.DropdownFrame>
  );
};

export default Dropdown;
