import styled from 'styled-components';

import { IAnswer } from '../../../EditTest/QuestionsList/Question/EditQuestion/EditAnswersList/EditAnswer/EditAnswer';
import { colors, fontSize } from '../../../../styleVariables';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { useAppDispatch } from '../../../../hooks';
import { markAnswerAsSelected } from '../../../../TestReducer';
import { IIds } from '../../../../types';

export const ExecAnswer = ({
  answerText,
  setAnswerChecked,
  isSelected,
  answerId,
  testId,
  questId
}: IAnswer & {
  setAnswerChecked: Dispatch<SetStateAction<boolean>>;
  isSelected: boolean;
} & IIds) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSelected) {
      setAnswerChecked(true);
    }
  });

  return (
    <>
      <AnswerContainer>
        <Title htmlFor={answerText}>{answerText}</Title>
        <CheckboxContainer>
          <Checkbox
            type="radio"
            name="answer-radio"
            id={answerText}
            checked={isSelected}
            onChange={() => {
              setAnswerChecked(true);
              dispatch(
                markAnswerAsSelected({
                  testId: testId,
                  questId: questId - 1,
                  answerId: answerId
                })
              );
            }}
          />
          <StyledCheckbox htmlFor={answerText} />
        </CheckboxContainer>
      </AnswerContainer>
    </>
  );
};

const AnswerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% + 20px);
  padding: 5px 10px;
  border-radius: 5px;
  transition: 0.3s ease background-color;
  &:hover {
    background-color: ${colors.gray};
  }
`;

const Title = styled.label`
  font-size: ${fontSize.medium}px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  display: none;
  &:checked + label {
    background-color: ${colors.green};
  }
`;

const StyledCheckbox = styled.label`
  width: 20px;
  height: 20px;
  background-color: transparent;
  border-radius: 100%;
  border: 2px solid ${colors.gray};
  transition: 0.3s ease background-color;
`;
