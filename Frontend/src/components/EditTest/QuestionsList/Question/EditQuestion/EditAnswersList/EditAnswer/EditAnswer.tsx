import styled from 'styled-components';

import { ChangeAnswerTitle } from './ChangeAnswerTitle/ChangeAnswerTitle';

import { ChangeRightAnswer } from './ChangeRightAnswer/ChangeRightAnswer';
import { DeleteAnswer } from './DeleteAnswer/DeleteAnswer';

export interface IAnswer {
  answerId: number;
  answerText: string;
  isRightAnswer: boolean;
}

export const EditAnswer = ({
  answerId,
  answerText,
  isRightAnswer
}: IAnswer) => {
  return (
    <>
      <Container>
        <ChangeAnswerTitle answerText={answerText} answerId={answerId} />
        <ChangeRightAnswer isRightAnswer={isRightAnswer} answerId={answerId} />
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
