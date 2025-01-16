import styled from 'styled-components';

import { IAnswer } from '../../../EditTest/QuestionsList/Question/EditQuestion/AnswersList/Answer/Answer';
import { colors, fontSize } from '../../../../styleVariables';
import { Dispatch, SetStateAction } from 'react';

export const ExecAnswer = ({
  // answerId,
  answerText,
  isRightAnswer,
  setAnswerChecked
}: IAnswer & { setAnswerChecked: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <>
      <Container>
        <AnswerContainer>
          <Title htmlFor={answerText}>{answerText}</Title>
          <CheckboxContainer>
            <Checkbox
              type="radio"
              name="answer-radio"
              id={answerText}
              data-isright={isRightAnswer}
              onChange={() => setAnswerChecked(true)}
            />
            <StyledCheckbox htmlFor={answerText} />
          </CheckboxContainer>
        </AnswerContainer>
      </Container>
    </>
  );
};

const Container = styled.div``;

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
    background-color: #a3be8c;
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
