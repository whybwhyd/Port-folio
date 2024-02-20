import { styled } from 'styled-components';

export const TotalFrame = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 60px;
`;
export const ListFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
export const Scene = styled.div`
  width: 750px;
  height: 398px;
  position: relative;
  perspective: 1000px;
`;
export const CardFrame = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
`;
export const Card = styled.div`
  border: 2px solid transparent;
  width: 392px;
  height: 398px;
  background-color: #d9d9d9;
  &:nth-child(1) {
    transform: rotateY(-20deg);
  }
  &:nth-child(2) {
    transform: rotateY(0deg);
    height: 105%;
    width: 105%;
  }
  &:nth-child(3) {
    transform: rotateY(20deg);
  }
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
export const ListMenuFrame = styled.div`
  margin-left: auto;
  margin-right: 30px;
`;
export const ListMenu = styled.img`
  width: 10px;
  height: 38px;
`;
