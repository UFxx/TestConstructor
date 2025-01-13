import styled from 'styled-components';

import { Answers } from './Answers/Answers';
import { QuestionTitle } from './QuestionTitle/QuestionTitle';
import { IdsContext } from '../../../../../contexts';

export const QuestionEditor = () => {
  const questId = new URL(window.location.toString()).searchParams
    .get('testid')
    ?.split('=')[1];

  const testId = new URL(window.location.toString()).searchParams
    .get('testid')
    ?.split('?')[0];

  return (
    <>
      <Container>
        <IdsContext.Provider
          value={{ testId: Number(testId), questId: Number(questId) }}
        >
          <QuestionTitle />
          <Answers />
        </IdsContext.Provider>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100svh;
`;
