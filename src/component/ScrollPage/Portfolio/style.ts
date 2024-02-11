import { styled } from 'styled-components';

export const ListFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
export const Card = styled.div`
  border: 2px solid black;
  width: 392px;
  height: 398px;
`;
export const LeftArrow = styled.img`
  width: 45px;
  height: 90px;
`;
export const RightArrow = styled.img`
  width: 45px;
  height: 90px;
  transform: scaleX(-1);
`;
