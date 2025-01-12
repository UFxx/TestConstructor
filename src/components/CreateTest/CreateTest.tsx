import styled from 'styled-components';
import { TestTitle } from './TestTitle/TestTitle';
import { QuestionsList } from './QuestionsList/QuestionsList';

export const CreateTest = () => {
  return (
    <>
      <Container>
        <TestTitle />
        <QuestionsList />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;
