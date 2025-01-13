import styled from 'styled-components';
import { colors } from '../../../../../../../styleVariables';

import { AnswerTextInput } from './AnswerTextInput/AnswerTextInput';

import deleteIcon from '../../../../../../../assets/delete.svg';

import { useContext } from 'react';

import { useAppDispatch } from '../../../../../../../hooks';

import { deleteAnswer, setRightAnswer } from '../../../../../../../TestReducer';
import { IdsContext } from '../../../../../../../contexts';

export interface IAnswer {
  answerId: number;
  answerText: string;
  isRightAnswer: boolean;
}

export const Answer = ({ answerId, answerText, isRightAnswer }: IAnswer) => {
  const ids = useContext(IdsContext);
  const dispatch = useAppDispatch();

  return (
    <>
      <Container>
        <AnswerTextInput answerText={answerText} answerId={answerId} />
        <IsRightAnswerContainer
          onClick={() =>
            dispatch(
              setRightAnswer({
                testId: ids.testId,
                questId: ids.questId,
                answerId: answerId
              })
            )
          }
          $isRightAnswer={isRightAnswer}
        ></IsRightAnswerContainer>
        <Delete
          src={deleteIcon}
          alt="delete answer image"
          onClick={() =>
            dispatch(
              deleteAnswer({
                testId: ids.testId,
                questId: ids.questId,
                answerId: answerId
              })
            )
          }
        />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
  align-items: center;
  margin-top: 10px;
`;

const IsRightAnswerContainer = styled.div<{ $isRightAnswer: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: 2px solid ${colors.gray};
  background-color: ${(props) =>
    props.$isRightAnswer ? '#a3be8c' : 'transparent'};
  transition: 0.3s ease background-color;
  &:hover {
    background-color: #a3be8c70;
  }
`;

const Delete = styled.img`
  opacity: 0.5;
  transition: 0.3s ease opacity;
  &:hover {
    opacity: 1;
  }
`;
