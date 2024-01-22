import SignUp from 'component/SignUp/SignUp';
import Login from 'component/Login/Login';
import * as St from './style';
import React, { useState } from 'react';

interface ModalTypes {
  setIsModalOpen: (value: React.SetStateAction<boolean>) => void;
}

const Modal = (props: ModalTypes) => {
  const { setIsModalOpen } = props;
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [showComponent, setShowComponent] = useState(false);

  return (
    <div>
      <St.ModalBackground>
        <St.ModalWrapper>
          <div>
            <St.ShutDownBtn onClick={closeModal}>x</St.ShutDownBtn>
          </div>
          <div>
            {showComponent && (
              <SignUp
                showComponent={showComponent}
                setShowComponent={setShowComponent}
              />
            )}
            {!showComponent && (
              <Login
                showComponent={showComponent}
                setShowComponent={setShowComponent}
              />
            )}
          </div>
        </St.ModalWrapper>
      </St.ModalBackground>
    </div>
  );
};

export default Modal;
