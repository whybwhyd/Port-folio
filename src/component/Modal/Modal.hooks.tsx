import type { ReactNode } from 'react';
import React from 'react';
import Modal from './Modal';
import { values } from '../../recoil/modalState';

export const useModal = () => {
  const { mount: _mount, unmount: _unmount } = values();

  type Mount = (name: string, element: ReactNode) => void;
  const mount: Mount = (name, element) => {
    _mount(
      name,
      <Modal name={name} position="center">
        {element}
      </Modal>,
    );
  };
  const leftMount: Mount = (name, element) => {
    _mount(
      name,
      <Modal name={name} position="left">
        {element}
      </Modal>,
    );
  };

  const rightMount: Mount = (name, element) => {
    _mount(
      name,
      <Modal name={name} position="right">
        {element}
      </Modal>,
    );
  };

  const unmount = (name: string) => {
    _unmount(name);
  };

  return { mount, leftMount, rightMount, unmount };
};
