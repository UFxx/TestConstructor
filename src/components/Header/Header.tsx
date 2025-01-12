import styled from 'styled-components';
import { colors } from '../../styleVariables';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <nav>
          <HeaderMenu>
            <MenuItem>
              <ItemLink to="/alltests">Все тесты</ItemLink>
            </MenuItem>
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
