import { styled } from 'styled-components';

export const HeaderWrapper = styled.header`
  position: fixed;
  display: flex;
  justify-content: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 80px;
  font-size: 20px;
`;
export const HeaderContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 100%;
`;
export const NavWrapper = styled.nav`
  width: 60%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-right: 140px;
`;
export const NavContents = styled.ul`
  display: flex;
  justify-content: flex-end;
  gap: 30px;

  @media (max-width: 1060px) {
    display: none;
  }
`;
export const HeaderLoginBtn = styled.div`
  @media (max-width: 1060px) {
    display: none;
  }
`;
export const HeaderMenuImg = styled.img`
  @media (min-width: 1060px) {
    display: none;
  }
`;
