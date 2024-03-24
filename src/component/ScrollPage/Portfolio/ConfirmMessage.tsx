import React from 'react';
import * as St from './style';
import { useModal } from '../../Modal/Modal.hooks';

const ConfirmMessage = () => {
  const { unmount } = useModal();
  const confirmMessageX = () => {
    unmount('ConfirmMessage');
  };
  const deleteHandler = () => {
    unmount('ConfirmMessage');
  };
  const cancelHandler = () => {
    unmount('ConfirmMessage');
  };
  return (
    <div>
      <St.confirmMessageXFrame>
        <St.confirmMessageX onClick={confirmMessageX}>x</St.confirmMessageX>
      </St.confirmMessageXFrame>
      <St.ConfirmMessageGroup>
        <p>해당 게시물을 삭제하시겠습니까?</p>
        <St.MessageButtonGroup>
          <St.DeleteButton onClick={deleteHandler}>삭제</St.DeleteButton>
          <St.CancelButton onClick={cancelHandler}>취소</St.CancelButton>
        </St.MessageButtonGroup>
      </St.ConfirmMessageGroup>
    </div>
  );
};

export default ConfirmMessage;
