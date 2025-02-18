import styled from 'styled-components';
import {
  fontSize,
  fontWeight,
  colors
} from '../../../../../../../../styleVariables';

import { IAnswer } from '../EditAnswer';
import { useAppDispatch } from '../../../../../../../../hooks';
import { changeAnswerTitle } from '../../../../../../../../TestReducer';
import { useContext } from 'react';
import { IdsContext } from '../../../../../../../../contexts';

export const ChangeAnswerTitle = ({
  answerText,
  answerId
}: Omit<IAnswer, 'isRightAnswer'>) => {
  const ids = useContext(IdsContext);

  const dispatch = useAppDispatch();

  return (
    <>
      <AnswerText
        type="text"
        placeholder="Введите ответ"
        defaultValue={answerText}
        onChange={(e) =>
          dispatch(
            changeAnswerTitle({
              testId: ids.testId,
              questId: ids.questId,
              answerId: answerId,
              newName: e.target.value
            })
          )
        }
      />
    </>
  );
};

const AnswerText = styled.input`
  font-size: ${fontSize.medium}px;
  font-weight: ${fontWeight.extraLight};
  border: 2px solid ${colors.gray};
  padding: 5px 10px;
  outline: none;
  border-radius: 5px;
  transition: 0.3s ease border;
  &:focus {
    border: 2px solid gray;
  }
`;
