import styled from 'styled-components';
import { colors, fontSize, fontWeight } from '../../../styleVariables';

import { Link } from 'react-router-dom';

import CheckIcon from '../../../assets/check.png';

import { ITest } from '../../../types';

export const Test = ({ id, name, img, questions, completed }: ITest) => {
  return (
    <Container to={`/createtest?testid=${id}`}>
      <Image src={img} alt={`image ${id}`} />
      <Info>
        <Title>{name}</Title>
        <NumberOfQuestions>Вопросов: {questions.length}</NumberOfQuestions>
      </Info>
      {completed && <Check src={CheckIcon} />}
    </Container>
  );
};

const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 200px;
  background-color: ${colors.gray};
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s ease box-shadow, 0.3s ease transform;
  &:hover {
    box-shadow: 0 0 2px 1px ${colors.black}30;
    transform: scale(1.01);
  }
  &:active {
    transform: scale(0.95);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 110px;
  border-radius: 10px 10px 0 0;
`;

const Info = styled.div`
  padding: 10px;
`;

const Title = styled.p`
  font-size: ${fontSize.medium};
  font-weight: ${fontWeight.regular};
`;

const NumberOfQuestions = styled.p`
  margin-top: 20px;
  font-size: ${fontSize.small};
  font-weight: ${fontWeight.extraLight};
`;

const Check = styled.img`
  width: 30px;
  height: 30px;
  align-self: flex-end;
  margin: -30px 10px 0 0;
`;
