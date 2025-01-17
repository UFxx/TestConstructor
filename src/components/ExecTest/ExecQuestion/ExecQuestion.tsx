import styled from 'styled-components';
import { colors, fontSize } from '../../../styleVariables';

import { useAppSelector } from '../../../hooks';

import { createContext, useState } from 'react';

import { Link } from 'react-router-dom';

import { ExecAnswer } from './ExecAnswer/ExecAnswer';
import { EndTest } from '../EndTest/EndTest';

const IdsContext = createContext({ testId: 0, questId: 0 });

export const ExecQuestion = () => {
  const [answerChecked, setAnswerChecked] = useState(false);
  const [endOfTest, setEndOfTest] = useState(false);
  const [questId, setQuestId] = useState(
    Number(
      new URL(window.location.toString()).searchParams
        .get('testid')
        ?.split('=')[1]
    )
  );

  const testId = Number(
    new URL(window.location.toString()).searchParams
      .get('testid')
      ?.split('?')[0]
  );

  const quest = useAppSelector(
    (state) =>
      state.tests.filter((t) => t.id === testId)[0].questions[questId - 1]
  );

  const questionsLength = useAppSelector(
    (state) => state.tests.filter((t) => t.id === testId)[0].questions.length
  );

  function nextQuestion(): void {
    if (questId >= questionsLength && answerChecked) {
      setEndOfTest(true);
    } else if (answerChecked) {
      setQuestId((prevValue) => prevValue + 1);
    }
    setAnswerChecked(false);
  }

  function prevQuestion(): void {
    if (questId <= 1) {
      return;
    } else {
      setQuestId((prevValue) => prevValue - 1);
    }
  }

  return (
    <>
      <IdsContext.Provider value={{ testId: testId, questId: questId }}>
        {endOfTest ? (
          <EndTest />
        ) : (
          <Container>
            {quest.questionImage === '' ? null : (
              <Image
                src={quest.questionImage}
                alt={`${quest.questionText} image`}
              />
            )}
            <Title>{quest.questionText}</Title>
            <AnswersContainer>
              {quest.answers.map((a) => {
                return (
                  <ExecAnswer
                    key={`${testId}-${questId}-${a.id}`}
                    answerText={a.answerText}
                    isRightAnswer={a.isRightAnswer}
                    setAnswerChecked={setAnswerChecked}
                    isSelected={a.isSelected}
                    answerId={a.id}
                    testId={testId}
                    questId={questId}
                  />
                );
              })}
            </AnswersContainer>
            <ButtonsContainer>
              <Button
                to={`/exectest/question?testid=${testId}?questid=${
                  questId - 1
                }`}
                onClick={prevQuestion}
              >
                Назад
              </Button>
              <Button
                to={`/exectest/question?testid=${testId}?questid=${
                  questId + 1
                }`}
                onClick={nextQuestion}
              >
                Далее
              </Button>
            </ButtonsContainer>
            {answerChecked ? null : <ErrorText>Выберите ответ</ErrorText>}
          </Container>
        )}
      </IdsContext.Provider>
    </>
  );
};

const Container = styled.div`
  height: calc(100svh - 40px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 500px;
  border-radius: 10px;
`;

const Title = styled.p`
  font-size: ${fontSize.large}px;
`;

const AnswersContainer = styled.div``;

const ButtonsContainer = styled.div`
  display: flex;
  column-gap: 20px;
`;

const Button = styled(Link)`
  margin-top: 10px;
  padding: 5px 10px;
  border: 2px solid ${colors.gray};
  border-radius: 5px;
  transition: 0.3s ease border;
  &:hover {
    border: 2px solid gray;
  }
`;

const ErrorText = styled.p`
  margin-top: 10px;
  color: ${colors.red};
`;
