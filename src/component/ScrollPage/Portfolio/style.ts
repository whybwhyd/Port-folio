import { styled } from 'styled-components';

export const TotalFrame = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 40px;
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
export const CardDelete = styled.button`
  box-sizing: border-box;
  background-color: transparent;
  border-radius: 50%;
  font-size: 17px;
  margin: 10px 5px auto auto;
  font-weight: 700;
  border: 4px solid transparent;
  color: transparent;
  &:hover {
    border: 4px solid rgba(255, 255, 255, 0.8);
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
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
  &:hover {
    ${CardDelete} {
      color: rgba(0, 0, 0, 0.8);
    }
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
  margin-left: 890px;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-radius: 20px;
`;
export const ListMenu = styled.img`
  width: 10px;
  height: 38px;
`;
export const DropdownFrame = styled.div`
  display: grid;
  background-color: white;
  gap: 10px;
  justify-items: center;
  align-items: center;
`;
export const AddListButton = styled.button`
  background: transparent;
  border: none;
  font-size: 20px;
`;
export const DeleteListButton = styled.button`
  background: transparent;
  border: none;
  font-size: 20px;
`;
