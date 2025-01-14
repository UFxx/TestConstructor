import styled from 'styled-components';

import { AnswerTextInput } from './AnswerTextInput/AnswerTextInput';

import { IsRightAnswer } from './IsRightAnswer/IsRightAnswer';
import { DeleteAnswer } from './DeleteAnswer/DeleteAnswer';

export interface IAnswer {
  answerId: number;
  answerText: string;
  isRightAnswer: boolean;
}

export const Answer = ({ answerId, answerText, isRightAnswer }: IAnswer) => {
  return (
    <>
      <Container>
        <AnswerTextInput answerText={answerText} answerId={answerId} />
        <IsRightAnswer isRightAnswer={isRightAnswer} answerId={answerId} />
        <DeleteAnswer answerId={answerId} />
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
