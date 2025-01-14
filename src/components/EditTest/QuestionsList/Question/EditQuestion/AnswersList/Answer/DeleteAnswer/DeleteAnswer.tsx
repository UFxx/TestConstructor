import styled from 'styled-components';

import deleteIcon from '../../../../../../../../assets/delete.svg';

import { useContext } from 'react';

import { useAppDispatch } from '../../../../../../../../hooks';

import { deleteAnswer } from '../../../../../../../../TestReducer';
import { IdsContext } from '../../../../../../../../contexts';
import { IAnswer } from '../Answer';

export const DeleteAnswer = ({ answerId }: Pick<IAnswer, 'answerId'>) => {
  const ids = useContext(IdsContext);
  const dispatch = useAppDispatch();
  return (
    <>
      <Delete
        src={deleteIcon}
        alt="delete answer image"
        onClick={() =>
          dispatch(
            deleteAnswer({
              testId: ids.testId,
              questId: ids.questId,
              answerId: answerId
            })
          )
        }
      />
    </>
  );
};

const Delete = styled.img`
  opacity: 0.5;
  transition: 0.3s ease opacity;
  &:hover {
    opacity: 1;
  }
`;
