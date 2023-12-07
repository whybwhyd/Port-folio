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
  /* background-color: lightblue; */
`;
export const HeaderContents = styled.div`
  display: flex;
  /* gap: 30px; */
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 100%;
  /* background-color: pink; */
`;
export const NavWrapper = styled.nav`
  width: 60%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  /* transform: translate(-140px, 0); */
  margin-right: 140px;
  /* background-color: lightgreen; */
`;
export const NavContents = styled.ul`
  display: flex;
  justify-content: flex-end;
  gap: 30px;
`;
