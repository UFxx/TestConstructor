import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import { changeQuestionTitle } from '../../../../../TestReducer';
import { colors, fontSize } from '../../../../../styleVariables';
import { Link } from 'react-router-dom';

import goBack from '../../../../../assets/go-back.svg';

export const QuestionEditor = () => {
  const questId = new URL(window.location.toString()).searchParams
    .get('testid')
    ?.split('=')[1];

  const testId = new URL(window.location.toString()).searchParams
    .get('testid')
    ?.split('?')[0];

  const quest = useAppSelector(
    (state) =>
      state.tests
        .filter((test) => test.id.toString() === testId)[0]
        .questions.filter((quest) => quest.id.toString() === questId)[0]
  );
  const dispatch = useAppDispatch();

  return (
    <>
      <Container>
        <Link to={`/createtest?testid=${testId}`}>
          <BackImage src={goBack} alt="go back image" />
        </Link>
        <Title
          placeholder="Вопрос"
          defaultValue={quest.questionText}
          onChange={(e) =>
            dispatch(
              changeQuestionTitle({
                testId: testId,
                questId: questId,
                newName: e.target.value
              })
            )
          }
        ></Title>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100svh;
`;

const Title = styled.input`
  font-size: ${fontSize.medium}px;
  width: 400px;
  border-radius: 5px;
  padding: 10px 20px;
  border: 2px solid ${colors.gray};
  outline: none;
  transition: 0.3s ease border;
  &:focus {
    border: 2px solid gray;
  }
`;

const BackImage = styled.img`
  margin-right: 15px;
  opacity: 0.5;
  transition: 0.3 ease opacity;
  &:hover {
    opacity: 1;
  }
`;
