import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import * as St from './style';

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <St.LayoutWrapper>
      <Header />
      <St.MainWrapper>{props.children}</St.MainWrapper>
      <Footer />
    </St.LayoutWrapper>
  );
};
export default Layout;
