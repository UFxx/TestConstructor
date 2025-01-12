import styled from 'styled-components';
import { colors, fontSize, fontWeight } from '../../../../styleVariables';
import { Link } from 'react-router-dom';

import { useAppDispatch } from '../../../../hooks';
import { deleteQuestion } from '../../../../TestReducer';

interface IProps {
  id: number;
  text: string;
  testId: string | null;
}

export const Question = ({ id, text, testId }: IProps) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <Container>
        <Title to={`/createtest/question?testid=${testId}?questid=${id}`}>
          {text}
        </Title>
        <DeleteButton
          onClick={() =>
            dispatch(deleteQuestion({ testId: testId, questId: id }))
          }
        >
          -
        </DeleteButton>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 20px;
`;

const Title = styled(Link)`
  font-size: ${fontSize.medium}px;
  font-weight: ${fontWeight.extraLight};
`;

const DeleteButton = styled.button`
  font-size: ${fontSize.medium}px;
  background-color: transparent;
  border: 2px solid ${colors.gray};
  border-radius: 100%;
  padding: 0 10px;
  cursor: pointer;
  transition: 0.3s ease border;
  &:hover {
    border: 2px solid gray;
  }
`;
