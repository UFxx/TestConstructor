import styled from 'styled-components';
import { colors, fontSize } from '../../../styleVariables';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { Question } from './Question/Question';
import { addQuestion } from '../../../TestReducer';

import { TestIdContext } from '../../../contexts';
import { useContext } from 'react';

export const QuestionsList = () => {
  const testId = useContext(TestIdContext).testId;
  const questions = useAppSelector(
    (state) => state.tests.filter((test) => test.id === testId)[0].questions
  );
  const dispatch = useAppDispatch();

  return (
    <>
      <Container>
        <Title>Список вопросов:</Title>
        <QuestionsContainer>
          {questions.map((question) => (
            <Question
              key={`${testId}-${question.id}`}
              questId={question.id}
              text={question.questionText}
            />
          ))}
        </QuestionsContainer>
        <AddQuestion onClick={() => dispatch(addQuestion({ testId: testId }))}>
          +
        </AddQuestion>
      </Container>
    </>
  );
};

const Container = styled.div`
  position: relative;
  text-align: center;
  margin-top: 30px;
`;

const Title = styled.p`
  font-size: ${fontSize.large}px;
`;

const QuestionsContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const AddQuestion = styled.button`
  position: absolute;
  right: calc(100% + 20px);
  top: 0;
  white-space: nowrap;
  font-size: ${fontSize.large}px;
  background-color: transparent;
  border: 2px solid ${colors.gray};
  border-radius: 100%;
  padding: 0 15px;
  cursor: pointer;
  transition: 0.3s ease border, 0.3s ease border-radius, 0.3s ease transform;
  &:hover {
    border-radius: 5px;
    border: 2px solid gray;
  }
  &:active {
    transform: scale(0.9);
  }
`;
