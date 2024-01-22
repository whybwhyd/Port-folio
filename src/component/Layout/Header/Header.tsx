import * as St from './style';
import Modal from '../../Modal/Modal';
import { useState } from 'react';
import menu from '../../../assets/menu.png';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <St.HeaderWrapper>
      <St.HeaderContents>
        <div>로고</div>

        <>
          <St.NavWrapper>
            <St.NavContents>
              <li>portfolio</li>
              <li>about me</li>
              <li>skills</li>
              <li>contact</li>
            </St.NavContents>
          </St.NavWrapper>
          <St.HeaderLoginBtn onClick={() => setIsModalOpen(true)}>
            Login
          </St.HeaderLoginBtn>
          <St.HeaderMenuImg src={menu} alt="메뉴" />
        </>

        {isModalOpen && (
          <div>
            <Modal setIsModalOpen={setIsModalOpen} />
          </div>
        )}
      </St.HeaderContents>
    </St.HeaderWrapper>
  );
};

export default Header;
