import { styled } from 'styled-components';

export const Outer = styled.div`
  height: 100vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;
