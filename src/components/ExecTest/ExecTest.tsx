import styled from 'styled-components';
import { colors, fontSize } from '../../styleVariables';

import { useAppSelector } from '../../hooks';

import { Link } from 'react-router-dom';

export const ExecTest = () => {
  const testId = Number(
    new URL(window.location.toString()).searchParams.get('testid')
  );

  const test = useAppSelector(
    (state) => state.tests.filter((t) => t.id === testId)[0]
  );

  return (
    <>
      <Container>
        <Title>{test.name}</Title>
        <Image src={test.img} alt={`${test.name} image`}></Image>
        <Button to={`/exectest/question?testid=${testId}?questid=1`}>
          Начать
        </Button>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
  height: calc(100svh - 60px);
`;

const Title = styled.p`
  font-size: ${fontSize.large}px;
`;

const Image = styled.img`
  width: 400px;
  border-radius: 5px;
`;

const Button = styled(Link)`
  background-color: transparent;
  outline: none;
  border: 2px solid ${colors.gray};
  padding: 5px 10px;
  font-size: ${fontSize.medium}px;
  border-radius: 5px;
  transition: 0.3s ease border;
  &:hover {
    border: 2px solid gray;
  }
`;
