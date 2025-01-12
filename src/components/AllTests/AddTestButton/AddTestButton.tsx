import styled from 'styled-components';
import { colors } from '../../../styleVariables';
import { useAppDispatch } from '../../../hooks';
import { addTest } from '../../../TestReducer';

export const AddTestButton = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <AddTest onClick={() => dispatch(addTest({ newId: Date.now() }))}>
        +
      </AddTest>
    </>
  );
};

const AddTest = styled.button`
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
