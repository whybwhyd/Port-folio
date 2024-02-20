import React, { useState } from 'react';
import { useModal } from 'component/Modal/Modal.hooks';
import * as St from './style';

const Login = () => {
  const initialValue = { id: '', password: '' };
  const { unmount } = useModal();
  const [form, setForm] = useState(initialValue);
  const { id, password } = form;
  const [checked, setChecked] = useState(false);

  const loginToSignUp = () => {
    console.log('1');
  };
  const onChange = (e: { target: { name: string; value: unknown } }) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };
  const checkOnChange = (e: { target: { checked: boolean } }) => {
    const isChecked = e.target.checked;
    // after1m.setMinutes(now.getMinutes() + 1);
    setChecked(isChecked);
    if (isChecked) {
      //   setCookie('rememberText', form, { path: '/', expires: after1m });
    } else {
      //   removeCookie('rememberText');
    }
  };
  const loginHandler = () => {
    console.log(id, password);
    setForm(initialValue);
  };
  const closeModal = () => {
    unmount('login');
  };

  return (
    <div>
      <St.ShutDownBtn onClick={closeModal}>x</St.ShutDownBtn>
      <div>
        <St.ContentWrapper>
          <St.LoginFont>Login</St.LoginFont>
          <div>
            <St.InputWrapper>
              <St.InputStyle
                id="LoginId"
                name="id"
                value={id}
                onChange={onChange}
                placeholder="아이디를 입력해주세요"
              />
              <St.InputStyle
                id="LoginPw"
                name="password"
                type="password"
                value={password}
                onChange={onChange}
                placeholder="비밀번호를 입력해주세요"
              />
              <St.InputItemGroup>
                <St.RememberId>
                  <input
                    type="checkbox"
                    onChange={checkOnChange}
                    checked={checked}
                  />
                  <span>아이디 기억하기</span>
                </St.RememberId>
                <St.SignUpBtn onClick={loginToSignUp}>회원가입</St.SignUpBtn>
              </St.InputItemGroup>
              <St.LoginBtn onClick={loginHandler}>로그인</St.LoginBtn>
            </St.InputWrapper>
          </div>
          <St.SocialLoginGroup>
            <St.Circle>구글</St.Circle>
            <St.Circle>카카오</St.Circle>
            <St.Circle>네이버</St.Circle>
            <St.Circle>깃허브</St.Circle>
          </St.SocialLoginGroup>
        </St.ContentWrapper>
      </div>
    </div>
  );
};

export default Login;
