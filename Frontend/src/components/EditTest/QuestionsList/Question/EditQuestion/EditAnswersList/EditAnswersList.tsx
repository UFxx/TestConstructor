import styled from 'styled-components';
import { colors, fontSize } from '../../../../../../styleVariables';

import { EditAnswer } from './EditAnswer/EditAnswer';
import { useAppDispatch, useAppSelector } from '../../../../../../hooks';
import { addAnswer } from '../../../../../../TestReducer';

import { IdsContext } from '../../../../../../contexts';
import { useContext } from 'react';

export const EditAnswersList = () => {
  const ids = useContext(IdsContext);
  const answers = useAppSelector(
    (state) =>
      state.tests
        .filter((test) => test.id === ids.testId)[0]
        .questions.filter((quest) => quest.id === ids.questId)[0]?.answers
  );

  const dispatch = useAppDispatch();

  return (
    <>
      <Container>
        <AnswersContainer>
          <AnswerTitleContainer>
            <AddAnswer
              onClick={() =>
                dispatch(
                  addAnswer({ testId: ids.testId, questId: ids.questId })
                )
              }
            >
              +
            </AddAnswer>
            <Title>Список ответов:</Title>
          </AnswerTitleContainer>
          {answers?.map((answer) => {
            return (
              <EditAnswer
                key={`${ids.testId}-${ids.questId}-` + answer.id}
                answerId={answer.id}
                answerText={answer.answerText}
                isRightAnswer={answer.isRightAnswer}
              />
            );
          })}
        </AnswersContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  margin-top: 20px;
`;

const Title = styled.p`
  font-size: ${fontSize.medium}px;
`;

const AnswersContainer = styled.div`
  margin-left: 20px;
`;

const AnswerTitleContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 15px;
`;

const AddAnswer = styled.button`
  padding: 0 15px;
  font-size: ${fontSize.large}px;
  border-radius: 100%;
  border: 2px solid ${colors.gray};
  outline: none;
  background-color: transparent;
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
