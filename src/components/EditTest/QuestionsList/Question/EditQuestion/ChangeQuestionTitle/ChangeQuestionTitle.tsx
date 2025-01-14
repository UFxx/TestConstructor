import styled from 'styled-components';
import { colors, fontSize } from '../../../../../../styleVariables';

import {
  changeQuestionTitle,
  deleteQuestion
} from '../../../../../../TestReducer';

import { useAppDispatch, useAppSelector } from '../../../../../../hooks';

import { Link } from 'react-router-dom';

import goBack from '../../../../../../assets/go-back.svg';
import deleteIcon from '../../../../../../assets/delete.svg';

import { IdsContext } from '../../../../../../contexts';
import { useContext } from 'react';

export const ChangeQuestionTitle = () => {
  const ids = useContext(IdsContext);

  const quest = useAppSelector(
    (state) =>
      state.tests
        .filter((test) => test.id === ids.testId)[0]
        .questions.filter((quest) => quest.id === ids.questId)[0]
  );
  const dispatch = useAppDispatch();

  return (
    <>
      <Container>
        <Link to={`/createtest?testid=${ids.testId}`}>
          <Image src={goBack} alt="go back image" />
        </Link>
        <Title
          placeholder="Вопрос"
          defaultValue={quest.questionText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch(
              changeQuestionTitle({
                testId: ids.testId,
                questId: ids.questId,
                newName: e.target.value
              })
            )
          }
        ></Title>
        <Link
          to={`/createtest?testid=${ids.testId}`}
          onClick={() =>
            dispatch(
              deleteQuestion({ testId: ids.testId, questId: ids.questId })
            )
          }
        >
          <Image src={deleteIcon} alt="delete image" />
        </Link>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 15px;
  margin-top: 20px;
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

const Image = styled.img`
  opacity: 0.5;
  transition: 0.3 ease opacity;
  &:hover {
    opacity: 1;
  }
`;
