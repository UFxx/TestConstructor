import styled from 'styled-components';
import { colors } from '../../../../../../../../styleVariables';

import { IAnswer } from '../Answer';

import { setRightAnswer } from '../../../../../../../../TestReducer';
import { useAppDispatch } from '../../../../../../../../hooks';

import { useContext } from 'react';
import { IdsContext } from '../../../../../../../../contexts';

export const IsRightAnswer = ({
  isRightAnswer,
  answerId
}: Omit<IAnswer, 'answerText'>) => {
  const ids = useContext(IdsContext);
  const dispatch = useAppDispatch();

  return (
    <>
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
    </>
  );
};

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
