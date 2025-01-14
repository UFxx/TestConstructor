import styled from 'styled-components';

import { TestIdContext } from '../../contexts';

import { TestTitle } from './TestTitle/TestTitle';
import { QuestionsList } from './QuestionsList/QuestionsList';
import { AddTestImage } from './AddTetsImage/AddTestImage';

export const CreateTest = () => {
  const testId = new URL(window.location.toString()).searchParams.get('testid');

  return (
    <>
      <Container>
        <TestIdContext.Provider value={{ testId: Number(testId) }}>
          <TestTitle />
          <AddTestImage />
          <QuestionsList />
        </TestIdContext.Provider>
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
