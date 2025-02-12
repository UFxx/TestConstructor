import styled from 'styled-components';

import { Test } from './Test/Test';
import { AddTestButton } from './AddTestButton/AddTestButton';
import { useAppSelector } from '../../hooks';
import { IRole } from '../../types';

export const AllTests = ({ role }: { role: IRole }) => {
  const tests = useAppSelector((state) => state.tests);

  return (
    <MainContainer>
      {tests.map((test) => {
        return (
          <Test
            key={test.id}
            id={test.id}
            name={test.name}
            img={test.img}
            completed={test.completed}
            questions={test.questions}
            role={role}
          />
        );
      })}
      {role == 'admin' && <AddTestButton />}
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 40px;
  padding: 30px;
`;
