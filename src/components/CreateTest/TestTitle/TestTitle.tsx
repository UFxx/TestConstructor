import styled from 'styled-components';
import { colors, fontSize } from '../../../styleVariables';

import { useAppDispatch, useAppSelector } from '../../../hooks';
import { changeTestTitle, deleteTest } from '../../../TestReducer';

import { Link } from 'react-router-dom';

import goBack from '../../../assets/go-back.svg';
import deleteImage from '../../../assets/delete.svg';

import { TestIdContext } from '../../../contexts';
import { useContext } from 'react';

export const TestTitle = () => {
  const testId = useContext(TestIdContext).testId;

  const title = useAppSelector(
    (state) => state.tests.filter((t) => t.id === testId)[0].name
  );
  const dispatch = useAppDispatch();

  return (
    <>
      <Container>
        <Link to="/alltests">
          <BackImage src={goBack} alt="go back image" />
        </Link>
        <Title
          type="text"
          onChange={(e) => {
            dispatch(
              changeTestTitle({
                newName: e.target.value,
                testId: testId
              })
            );
          }}
          placeholder="Введите название теста"
          defaultValue={title}
        />
        <Link
          to="/alltests"
          onClick={() => dispatch(deleteTest({ testId: testId }))}
        >
          <DeleteImage src={deleteImage} alt="delete image" />
        </Link>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  column-gap: 15px;
  align-items: center;
`;

const Title = styled.input`
  padding: 5px 10px;
  border-radius: 5px;
  font-size: ${fontSize.large}px;
  text-align: center;
  border: none;
  box-shadow: 0 0 0 1px ${colors.gray};
  outline: none;
  transition: 0.3s ease box-shadow;
  &:focus {
    box-shadow: 0 0 0 2px gray;
  }
`;

const BackImage = styled.img`
  opacity: 0.5;
  transition: 0.3s ease opacity;
  &:hover {
    opacity: 1;
  }
`;

const DeleteImage = styled.img`
  opacity: 0.5;
  transition: 0.3s ease opacity;
  &:hover {
    opacity: 1;
  }
`;
