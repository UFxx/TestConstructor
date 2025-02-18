import styled from 'styled-components';

import { TestIdContext } from '../../contexts';

import { ChangeTestTitle } from './ChangeTestTitle/ChangeTestTitle';
import { QuestionsList } from './QuestionsList/QuestionsList';
import { AddTestImage } from './AddTetsImage/AddTestImage';
import { SetPassingScores } from './SetPassingScores/SetPassingScores';

export const EditTest = () => {
  const testId = new URL(window.location.toString()).searchParams.get('testid');

  return (
    <>
      <Container>
        <TestIdContext.Provider value={{ testId: Number(testId) }}>
          <ChangeTestTitle />
          <AddTestImage />
          <QuestionsList />
          <SetPassingScores />
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
