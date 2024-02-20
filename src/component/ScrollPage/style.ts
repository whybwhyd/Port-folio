import { styled } from 'styled-components';

export const Outer = styled.div`
  height: 100vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const InnerStyle = `
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
`;

export const Home = styled.div`
  background-color: lightpink;
  ${InnerStyle}
`;
export const Portfolio = styled.div`
  background-color: lightyellow;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
`;
export const AboutMe = styled.div`
  background-color: lightgreen;
  ${InnerStyle}
`;
export const Skills = styled.div`
  background-color: lightblue;
  ${InnerStyle}
`;
export const Contact = styled.div`
  background-color: #cc2efa;
  ${InnerStyle}
`;
