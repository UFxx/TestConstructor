import styled from 'styled-components';
import { colors, fontSize } from '../../../styleVariables';

import React, { useContext } from 'react';

import { TestIdContext } from '../../../contexts';

import { useAppDispatch, useAppSelector } from '../../../hooks';

import { changeTestPassingScores } from '../../../TestReducer';

export const SetPassingScores = () => {
  const dispatch = useAppDispatch();
  const testId = useContext(TestIdContext).testId;

  const test = useAppSelector(
    (state) => state.tests.filter((t) => t.id === testId)[0]
  );

  function setPassingScores(e: React.ChangeEvent<HTMLInputElement>): void {
    const passingScoresValue = Number(e.target.value);

    if (passingScoresValue > test.questions.length) {
      e.target.value = test.questions.length.toString();
    } else if (passingScoresValue < 0) {
      e.target.value = '1';
    } else {
      dispatch(
        changeTestPassingScores({
          testId: testId,
          passingScores: Number(e.target.value)
        })
      );
    }
  }

  return (
    <>
      <Container>
        <Title>Введите проходной балл:</Title>
        <Input
          type="number"
          defaultValue={test.passingScores}
          onBlur={(e) => setPassingScores(e)}
        />
      </Container>
      <PassingScoresInfo>
        Нельзя установить проходной балл больше, чем количество вопросов.
      </PassingScoresInfo>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

const Title = styled.p`
  font-size: ${fontSize.medium}px;
`;

const Input = styled.input`
  width: 45px;
  font-size: ${fontSize.medium}px;
  padding: 5px;
  padding-right: 0;
  text-align: center;
  border-radius: 5px;
  border: 2px solid ${colors.gray};
  transition: 0.3s ease border;
  &:focus {
    border: 2px solid gray;
  }
  &::-webkit-inner-spin-button {
    opacity: 0;
    z-index: -1;
  }
`;

const PassingScoresInfo = styled.p`
  color: ${colors.red};
  font-size: ${fontSize.medium}px;
`;
