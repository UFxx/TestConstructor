import styled from 'styled-components';
import { colors } from '../../styleVariables';

import { Dispatch, SetStateAction } from 'react';

import { Link } from 'react-router-dom';
import { IRole } from '../../types';

export const Header = ({
  setIsAuth,
  isAuth,
  setRole
}: {
  setIsAuth: Dispatch<SetStateAction<boolean>>;
  isAuth: boolean;
  setRole: Dispatch<SetStateAction<IRole>>;
}) => {
  function quitFromAccount() {
    setIsAuth(false);
    setRole('unauthorized');
    localStorage.setItem('role', 'unauthorized');
    localStorage.setItem('isAuth', JSON.stringify(false));
    localStorage.removeItem("JWT")
  }

  return (
    <>
      <HeaderContainer>
        <nav>
          <HeaderMenu>
            {isAuth && (
              <MenuItem>
                <ItemLink to="/alltests">Все тесты</ItemLink>
              </MenuItem>
            )}

            {isAuth ? (
              <MenuItem>
                <ItemButton onClick={quitFromAccount}>Выйти</ItemButton>
              </MenuItem>
            ) : (
              <MenuItem>
                <ItemLink to="/auth">Авторизация</ItemLink>
              </MenuItem>
            )}
          </HeaderMenu>
        </nav>
      </HeaderContainer>
    </>
  );
};

const HeaderContainer = styled.header`
  height: 40px;
  background-color: ${colors.gray};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderMenu = styled.ul`
  display: flex;
  column-gap: 20px;
`;

const MenuItem = styled.li`
  list-style: none;
`;

const ItemLink = styled(Link)`
  text-decoration: none;
  color: ${colors.black};
  transition: 0.3s ease color;
  &:hover {
    color: gray;
  }
`;

const ItemButton = styled.p`
  cursor: pointer;
  color: ${colors.black};
  transition: 0.3s ease color;
  &:hover {
    color: gray;
  }
`;
