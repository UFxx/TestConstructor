import styled from 'styled-components';
import { colors } from '../../../../../../styleVariables';

import { useRef, useCallback, useContext } from 'react';

import { addQuestionImage } from '../../../../../../TestReducer';
import { useAppDispatch } from '../../../../../../hooks';
import { IdsContext } from '../../../../../../contexts';

export const AddQuestionImage = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dispatch = useAppDispatch();
  const ids = useContext(IdsContext);

  const handleFileChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files![0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const img = new Image();
          img.src = reader.result as string;
          localStorage.setItem('questDataURL', img.src.toString());
        };
        reader.readAsDataURL(file);
      }
      setTimeout(() => {
        buttonRef.current?.click();
      }, 300);
    },
    []
  );

  return (
    <>
      <FileUploaderContainer>
        <FileUploader
          type="file"
          id={`${ids.questId}`}
          onChange={(e) => {
            handleFileChange(e);
          }}
        />
        <FileUploaderLabel htmlFor={`${ids.questId}`}>
          Выбрать картинку
        </FileUploaderLabel>
      </FileUploaderContainer>
      <Button
        ref={buttonRef}
        onClick={() => {
          dispatch(
            addQuestionImage({
              testId: ids.testId,
              questId: ids.questId,
              dataURL: localStorage.getItem('questDataURL')
            })
          );
        }}
      ></Button>
    </>
  );
};

const FileUploaderContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

const FileUploader = styled.input`
  &::-webkit-file-upload-button {
    opacity: 0;
  }
`;

const FileUploaderLabel = styled.label`
  padding: 5px 10px;
  border: 2px solid ${colors.gray};
  border-radius: 5px;
  transition: 0.3s ease border;
  &:hover {
    border: 2px solid gray;
  }
`;

const Button = styled.button`
  display: none;
`;
