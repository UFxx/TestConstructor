import styled from 'styled-components';
import { fontSize, colors } from '../../../styleVariables';

import { Link } from 'react-router-dom';

export const EndTest = () => {
  return (
    <>
      <Container>
        <Image src="" alt="" />
        <Title>Вы прошли тест!</Title>
        <TestResult>Ваш результат: .../...</TestResult>
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
