import { styled } from 'styled-components';

export const ModalBackground = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border: 2px solid transparent;
  background-color: rgba(217, 217, 217, 0.8);
  z-index: 998;
`;
export const ModalWrapper = styled.div`
  display: grid;
  grid-template-rows: 0.2fr 2fr;
  justify-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 70%;
  border: 2px solid transparent;
  background-color: white;
  z-index: 999;
`;
export const ShutDownBtn = styled.button`
  position: fixed;
  right: 10px;
  background-color: transparent;
  border: none;
  color: #d9d9d9;
  font-size: 25px;
  font-weight: bolder;
  margin: 10px;
`;
