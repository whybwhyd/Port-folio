import type { MouseEvent, ReactNode } from 'react';
import React from 'react';
import * as St from './style';
import { values } from '../../recoil/modalState';

interface Props {
  children: ReactNode;
  name: string;
  position: 'left' | 'center' | 'right';
}

type CloseModal = (event: MouseEvent<HTMLDivElement>) => void;

const Modal = ({ children, name, position }: Props) => {
  const { unmount } = values();

  const handleClose: CloseModal = (event) => {
    const { target, currentTarget } = event;

    if (target !== currentTarget) return;

    unmount(name);
  };

  let content;
  switch (position) {
    case 'center':
      content = (
        <St.ModalOuter onClick={handleClose}>
          <St.ModalInner>{children}</St.ModalInner>
        </St.ModalOuter>
      );
      break;
    case 'left':
      content = (
        <St.LeftModalOuter>
          <St.LeftModalInner>{children}</St.LeftModalInner>
        </St.LeftModalOuter>
      );
      break;
    case 'right':
      content = (
        <St.RightModalOuter>
          <St.RightModalInner>{children}</St.RightModalInner>
        </St.RightModalOuter>
      );
      break;
    default:
      content = (
        <St.ModalOuter onClick={handleClose}>
          <St.ModalInner>{children}</St.ModalInner>
        </St.ModalOuter>
      );
  }

  return <>{content}</>;
};

export default Modal;
