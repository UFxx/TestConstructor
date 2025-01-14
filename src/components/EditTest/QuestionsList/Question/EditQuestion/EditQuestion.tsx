import styled from 'styled-components';

import { AnswersList } from './AnswersList/AnswersList';
import { ChangeQuestionTitle } from './ChangeQuestionTitle/ChangeQuestionTitle';
import { IdsContext } from '../../../../../contexts';
import { AddQuestionImage } from './AddQuestionImage/AddQuestionImage';
import { useAppSelector } from '../../../../../hooks';

export const EditQuestion = () => {
  const questId = new URL(window.location.toString()).searchParams
    .get('testid')
    ?.split('=')[1];

  const testId = new URL(window.location.toString()).searchParams
    .get('testid')
    ?.split('?')[0];

  const questionImage = useAppSelector(
    (state) =>
      state.tests
        .filter((t) => t.id === Number(testId))[0]
        .questions.filter((q) => q.id === Number(questId))[0].questionImage
  );

  return (
    <>
      <Container>
        <IdsContext.Provider
          value={{ testId: Number(testId), questId: Number(questId) }}
        >
          <QuestionImage src={questionImage} alt="question image" />
          <ChangeQuestionTitle />
          <AddQuestionImage />
          <AnswersList />
        </IdsContext.Provider>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100svh;
`;

const QuestionImage = styled.img`
  margin-top: 20px;
  border-radius: 5px;
  width: 600px;
`;
