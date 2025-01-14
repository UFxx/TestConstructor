import styled from 'styled-components';

import React, { useContext, useRef, useCallback } from 'react';

import { TestIdContext } from '../../../contexts';

import { useAppDispatch } from '../../../hooks';
import { addTestImage } from '../../../TestReducer';
import { colors } from '../../../styleVariables';

export const AddTestImage = () => {
  const testId = useContext(TestIdContext).testId;
  const dispatch = useAppDispatch();

  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleFileChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files![0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const img = new Image();
          img.src = reader.result as string;
          localStorage.setItem('testDataURL', img.src.toString());
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
          id={`${testId}`}
          onChange={(e) => {
            handleFileChange(e);
          }}
        />
        <FileUploaderLabel htmlFor={`${testId}`}>
          Выбрать картинку
        </FileUploaderLabel>
      </FileUploaderContainer>
      <Button
        ref={buttonRef}
        onClick={() => {
          dispatch(
            addTestImage({
              testId: testId,
              dataURL: localStorage.getItem('testDataURL')
            })
          );
        }}
      />
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
