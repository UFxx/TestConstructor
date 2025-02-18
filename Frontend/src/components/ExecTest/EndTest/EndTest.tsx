import styled from 'styled-components';
import { fontSize, colors } from '../../../styleVariables';

import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../hooks';

export const EndTest = () => {
  const testId = Number(
    new URL(window.location.toString()).searchParams
      .get('testid')
      ?.split('?')[0]
  );

  const test = useAppSelector(
    (state) => state.tests.filter((t) => t.id === testId)[0]
  );
  const questions = test.questions;

  const rightAnswersCount = (function (): number {
    let counter: number = 0;
    questions.forEach((q) => {
      q.answers.forEach((a) => {
        if (a.isRightAnswer && a.isSelected) {
          counter += 1;
        }
      });
    });
    return counter;
  })();

  return (
    <>
      <Container>
        <Title>
          Вы {!(rightAnswersCount >= test.passingScores) && 'не'} прошли тест{' '}
          {test.name}
        </Title>
        <Image src={test.img} alt={`${test.name} image`} />
        <TestResult>
          Ваш результат: {rightAnswersCount}/{questions.length}
        </TestResult>
        <TestResult>Проходной балл: {test.passingScores}</TestResult>
        <Button to="/alltests">На главную</Button>
      </Container>
    </>
  );
};

const Container = styled.div`
  height: calc(100svh - 40px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 500px;
  border-radius: 5px;
`;

const Title = styled.p`
  font-size: ${fontSize.large}px;
`;

const TestResult = styled.p`
  font-size: ${fontSize.medium}px;
  margin-top: 10px;
`;

const Button = styled(Link)`
  margin-top: 20px;
  padding: 5px 10px;
  border-radius: 5px;
  border: 2px solid ${colors.gray};
  transition: 0.3s ease border;
  &:hover {
    border: 2px solid gray;
  }
`;
