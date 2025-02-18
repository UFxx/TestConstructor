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
  font-size: 42px;
  border-radius: 100%;
  padding: 4px 20px;
  border: 2px solid ${colors.gray};
  cursor: pointer;
  transition: 0.3s ease border, 0.3s ease border-radius;
  &:hover {
    border-radius: 5px;
    border: 2px solid gray;
  }
`;
