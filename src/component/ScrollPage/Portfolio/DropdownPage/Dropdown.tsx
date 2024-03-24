import React from 'react';
import * as St from '../style';
import { useModal } from '../../../Modal/Modal.hooks';
import AddModalPage from './AddModalPage';
import UpdateModalPage from './UpdateModalPage';

const Dropdown = () => {
  const { unmount, centerMount } = useModal();
  const listToAddHandler = () => {
    unmount('Dropdown');
    centerMount('AddModalPage', <AddModalPage />);
  };
  const listToUpdateHandler = () => {
    unmount('Dropdown');
    centerMount('UpdateModalPage', <UpdateModalPage />);
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
