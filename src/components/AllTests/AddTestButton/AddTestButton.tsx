import styled from 'styled-components';
import { colors } from '../../../styleVariables';

import { useAppDispatch } from '../../../hooks';
import { addTest } from '../../../TestReducer';

import { Link } from 'react-router-dom';

export const AddTestButton = () => {
  const newId = Date.now();
  const dispatch = useAppDispatch();

  return (
    <>
      <AddTest
        to={`/createtest?testid=${newId}`}
        onClick={() => dispatch(addTest({ newId: newId }))}
      >
        +
      </AddTest>
    </>
  );
};

const AddTest = styled(Link)`
  background: transparent;
  border: 2px solid ${colors.black}50;
  font-size: 42px;
  border-radius: 100%;
  padding: 4px 20px;
  cursor: pointer;
  transition: 0.3s ease border;
  &:hover {
    border: 2px solid ${colors.black};
  }
`;
