import type { PropsWithChildren, ReactNode } from 'react';
import React, { Fragment } from 'react';
import { atom, useRecoilState, useRecoilCallback } from 'recoil';

export const modalState = atom({
  key: 'modalState',
  default: new Map<string, ReactNode>(),
});

export const values = () => {
  const [overlays] = useRecoilState(modalState);

  const mount = useRecoilCallback(
    ({ set }) =>
      (id: string, element: ReactNode) => {
        set(modalState, (_overlays) => {
          const overlays = new Map(_overlays);
          overlays.set(id, element);
          return overlays;
        });
      },
    [],
  );

  const unmount = useRecoilCallback(
    ({ set }) =>
      (id: string) => {
        set(modalState, (_overlays) => {
          const overlays = new Map(_overlays);
          overlays.delete(id);
          return overlays;
        });
      },
    [],
  );
  return { overlays, mount, unmount };
};

export const OverlayProvider = ({ children }: PropsWithChildren) => {
  const { overlays } = values();

  return (
    <>
      {children}
      {[...overlays.entries()].map(([id, element]) => (
        <Fragment key={id}>{element}</Fragment>
      ))}
    </>
  );
};
