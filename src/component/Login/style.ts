import { styled } from 'styled-components';

export const ContentWrapper = styled.div`
  display: grid;
  gap: 30px;
  text-align: center;
`;
export const LoginFont = styled.span`
  font-size: 30px;
`;
export const InputWrapper = styled.div`
  display: grid;
  gap: 5px;
`;
export const InputStyle = styled.input`
  width: 100%;
  height: 40px;
  background-color: #d9d9d9;
  border: none;
  border-radius: 35px;
  padding: 20px;
`;
export const InputItemGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0 10px 0;
`;
export const RememberId = styled.div`
  font-size: 70%;
`;
export const SignUpBtn = styled.button`
  background-color: transparent;
  border: none;
  font-size: 70%;
`;
export const LoginBtn = styled.button`
  background-color: #000000;
  color: #ffffff;
  height: 150%;
  border-radius: 8px;
`;
export const SocialLoginGroup = styled.div`
  display: flex;
  gap: 10px;
`;
export const Circle = styled.div`
  width: 60px;
  height: 100%;
  background-color: gray;
  border-radius: 50%;
  text-align: center;
  line-height: 60px;
`;
