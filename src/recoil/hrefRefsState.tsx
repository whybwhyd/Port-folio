import React from 'react';

import { atom } from 'recoil';

export const hrefRefsState = atom({
  key: 'hrefRefsState',
  default: {
    href1: React.createRef<HTMLDivElement>(),
    href2: React.createRef<HTMLDivElement>(),
    href3: React.createRef<HTMLDivElement>(),
    href4: React.createRef<HTMLDivElement>(),
    href5: React.createRef<HTMLDivElement>(),
  },
});
