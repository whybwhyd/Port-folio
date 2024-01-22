import React, { useState } from 'react';

interface SignUpTypes {
  showComponent: boolean;
  setShowComponent: React.Dispatch<React.SetStateAction<boolean>>;
}
const SignUp = (props: SignUpTypes) => {
  const { showComponent, setShowComponent } = props;
  const initialValue = { id: '', password: '', passwordCheck: '' };
  const [form, setForm] = useState(initialValue);
  const { id, password, passwordCheck } = form;

  const MessageValue = {
    idMessage: '',
    passwordMessage: '',
    passwordCheckMessage: '',
    isIdMessage: false,
    isPasswordMessage: false,
    isPasswordCheckMessage: false,
  };
  const [message, setMessage] = useState(MessageValue);
  const { idMessage, passwordMessage, passwordCheckMessage } = message;
  const signUpToLogin = () => {
    setShowComponent(!showComponent);
  };

  const onChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    const validationResult = validateInput(value, name, form);

    switch (name) {
      case 'id':
        setMessage((prevMessage) => ({
          ...prevMessage,
          idMessage: validationResult,
        }));
        break;
      case 'password':
        setMessage((prevMessage) => ({
          ...prevMessage,
          passwordMessage: validationResult,
        }));
        break;
      case 'passwordCheck':
        setMessage((prevMessage) => ({
          ...prevMessage,
          passwordCheckMessage: validationResult,
        }));
        break;
      default:
        break;
    }

    setForm((form) => ({ ...form, [name]: value }));
  };

  const validateInput = (
    input: string,
    type: unknown,
    state: { id?: string; password: string | number; passwordCheck?: string },
  ) => {
    const emailRule =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    const passwordRule = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

    switch (type) {
      case 'email':
        return emailRule.test(input)
          ? '올바른 이메일 형식입니다.'
          : '이메일 형식으로 입력해주세요.';
      case 'password':
        return passwordRule.test(input)
          ? '올바른 비밀번호 형식입니다.'
          : '숫자+영문자+특수문자 조합으로 입력해주세요.';
      case 'passwordCheck':
        return input !== state.password
          ? '비밀번호가 다릅니다. 다시 확인해주세요.'
          : '입력한 비밀번호와 일치합니다.';
      default:
        return '';
    }
  };

  const signUpHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (
      id.length > 0 &&
      password.length > 0 &&
      passwordCheck.length > 0 &&
      password === passwordCheck
    ) {
      setForm({ id, password, passwordCheck });
    }
    setForm(initialValue);
  };

  return (
    <div>
      <div>SignUp</div>
      <div style={{ display: 'grid' }}>
        <input
          id="signUpId"
          name="id"
          value={id}
          onChange={onChange}
          placeholder="아이디를 입력해주세요"
        />
        <span>{idMessage}</span>
        <input
          id="signUpPassword"
          name="password"
          type="password"
          value={password}
          onChange={onChange}
          placeholder="비밀번호를 입력해주세요"
        />
        <span>{passwordMessage}</span>
        <input
          id="signUpCheck"
          name="passwordCheck"
          value={passwordCheck}
          onChange={onChange}
          placeholder="다시 비밀번호를 입력해주세요"
        />
      </div>
      <span>{passwordCheckMessage}</span>
      <button onClick={signUpHandler}>회원가입</button>
      <button onClick={signUpToLogin}>뒤로가기</button>
    </div>
  );
};

export default SignUp;
