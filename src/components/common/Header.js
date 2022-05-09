import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Responsive from './Responsive';
import styled, { css } from 'styled-components';
import palette from '../../styles/palette';
import Logo_img from '../../assets/common/Logo.png';

const menus = [
  { name: 'HOME', link: '/' },
  { name: 'ABOUT', link: '/about' },
];

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  height: 45px;
  background: ${palette.pink[0]};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

/* Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성 */
const Wrapper = styled(Responsive)`
  height: 2rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    //
  }
`;

const LogoImg = styled.img`
  padding-top: 5px;
  height: 39px;
  width: 100px;
`;

const MenusBlock = styled.div`
  margin-top: 13px;
  display: flex;
`;

const Menu = styled.div`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 550;
  font-size: 1.25rem;
  cursor: pointer;

  ${(props) =>
    props.active &&
    css`
      color: ${palette.pink[1]};
    `}

  & + & {
    margin-left: 2.625rem;
  }
`;

const Spacer = styled.div`
  height: 6.5rem;
  background: ${palette.pink[2]};
`;

const Header = ({ onSelect }) => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <LogoImg src={Logo_img}></LogoImg>
          <MenusBlock>
            {menus.map((m) => (
              <Menu key={m.name} onClick={() => onSelect(m.name)}>
                <Link
                  to={`${m.link}`}
                  style={{
                    textDecoration: 'none',
                    color: `${palette.purple[0]}`,
                  }}
                >
                  {m.name}
                </Link>
              </Menu>
            ))}
          </MenusBlock>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
