import { styled } from 'styled-components';

export const FooterWrapper = styled.footer`
  position: fixed;
  background-color: transparent;
  bottom: 30px;
  width: 100%;
  height: 50px;
  z-index: -1;
`;
export const FooterContents = styled.div`
  position: relative;
  width: 96%;
  max-width: 1100px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 10px;
  z-index: -1;
`;
