import styled from 'styled-components';
import { colors, fontSize } from '../../../styleVariables';

import { createContext, useState } from 'react';
import { useAppSelector } from '../../../hooks';
import { ExecAnswer } from './ExecAnswer/ExecAnswer';

const IdsContext = createContext({ testId: 0, questId: 0 });

export const ExecQuestion = () => {
  const [answerChecked, setAnswerChecked] = useState(false);

  const questId = Number(
    new URL(window.location.toString()).searchParams
      .get('testid')
      ?.split('=')[1]
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

  function nextQuestion() {
    if (questId >= questionsLength) {
      window.location.href = `/exectest/endtest?testid=${testId}`;
    } else if (answerChecked) {
      window.location.href = `/exectest/question?testid=${testId}?questid=${
        questId + 1
      }`;
    }
  }

  function prevQuestion() {
    if (questId !== 1) {
      window.location.href = `/exectest/question?testid=${testId}?questid=${
        questId - 1
      }`;
    } else return;
  }

  return (
    <>
      <IdsContext.Provider value={{ testId: testId, questId: questId }}>
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
                  answerId={a.id}
                  answerText={a.answerText}
                  isRightAnswer={a.isRightAnswer}
                  setAnswerChecked={setAnswerChecked}
                />
              );
            })}
          </AnswersContainer>
          <ButtonsContainer>
            <Button onClick={prevQuestion}>Назад</Button>
            <Button onClick={nextQuestion}>Далее</Button>
          </ButtonsContainer>
          {answerChecked ? null : <ErrorText>Выберите ответ</ErrorText>}
        </Container>
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

const Button = styled.button`
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
  color: #bf616a;
`;
