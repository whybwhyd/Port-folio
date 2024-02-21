import React from 'react';
import { useModal } from '../../Modal/Modal.hooks';

const ConfirmMessage = () => {
  const { unmount } = useModal();
  const deleteHandler = () => {
    unmount('ConfirmMessage');
  };
  const cancelHandler = () => {
    unmount('ConfirmMessage');
  };
  return (
    <div>
      <p>해당 게시물을 삭제하시겠습니까?</p>
      <div>
        <button onClick={deleteHandler}>삭제</button>
        <button onClick={cancelHandler}>취소</button>
      </div>
    </div>
  );
};

export default ConfirmMessage;
