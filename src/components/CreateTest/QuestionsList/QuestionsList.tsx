import styled from 'styled-components';
import { colors, fontSize } from '../../../styleVariables';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { Question } from './Question/Question';
import { addQuestion } from '../../../TestReducer';

export const QuestionsList = () => {
  const testId = new URL(window.location.toString()).searchParams.get('testid');
  const questions = useAppSelector(
    (state) =>
      state.tests.filter((test) => test.id.toString() === testId)[0].questions
  );
  const dispatch = useAppDispatch();

  console.log(questions);

  return (
    <>
      <Container>
        <Title>Список вопросов:</Title>
        <QuestionsContainer>
          {questions.map((question) => (
            <Question
              key={question.id}
              testId={testId}
              id={question.id}
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
  margin-top: 50px;
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
  transition: 0.3s ease border;
  cursor: pointer;
  &:hover {
    border: 2px solid gray;
  }
`;
