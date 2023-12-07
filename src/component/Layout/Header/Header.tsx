import * as St from './style';

const Header = () => {
  return (
    <St.HeaderWrapper>
      <St.HeaderContents>
        <div>로고</div>

        <St.NavWrapper>
          <St.NavContents>
            <li>portfolio</li>
            <li>about me</li>
            <li>skills</li>
            <li>contact</li>
          </St.NavContents>
        </St.NavWrapper>

        <div>Login</div>
      </St.HeaderContents>
    </St.HeaderWrapper>
  );
};

export default Header;
