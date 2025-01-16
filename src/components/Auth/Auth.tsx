import styled from 'styled-components';
import { colors, fontSize } from '../../styleVariables';
import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { IRole } from '../../types';

interface IAuth {
  setIsAuth: Dispatch<SetStateAction<boolean>>;
  setRole: Dispatch<SetStateAction<IRole>>;
  isAuth: boolean;
}

export const Auth = ({ setIsAuth, isAuth, setRole }: IAuth) => {
  useEffect(() => {
    if (isAuth) {
      window.location.href = '/alltests';
    } else {
      return;
    }
  }, [isAuth]);

  const loginInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  function auth(): void {
    const login: string | undefined = loginInput.current?.value;
    const password: string | undefined = passwordInput.current?.value;

    if (login === 'admin' && password === 'admin') {
      setIsAuth(true);
      setRole('admin');
    } else if (login === 'user' && password === 'user') {
      setIsAuth(true);
      setRole('user');
    } else return;
  }

  function authOnEnter(e: React.KeyboardEvent): void {
    const password: string | undefined = passwordInput.current?.value;
    const login: string | undefined = loginInput.current?.value;

    if (e.key === 'Enter') {
      if (login === 'admin' && password === 'admin') {
        setIsAuth(true);
        setRole('admin');
      } else if (login === 'user' && password === 'user') {
        setIsAuth(true);
        setRole('user');
      } else return;
    }
  }

  return (
    <>
      <Container>
        <Title>Авторизация</Title>
        <Form>
          <Login placeholder="Введите логин" ref={loginInput} />
          <Password
            placeholder="Введите пароль"
            ref={passwordInput}
            onKeyDown={(e) => authOnEnter(e)}
          />
          <Button type="button" onClick={auth}>
            Войти
          </Button>
        </Form>
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

const Title = styled.p`
  font-size: ${fontSize.large}px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  margin-top: 20px;
`;

const Login = styled.input`
  padding: 5px 10px;
  border-radius: 5px;
  border: 2px solid ${colors.gray};
  outline: none;
  font-size: ${fontSize.medium}px;
  transition: 0.3s ease border;
  &:focus {
    border: 2px solid gray;
  }
  &::placeholder {
    transition: 0.3s ease transform, 0.3s ease opacity;
  }
  &:focus::placeholder {
    transform: translateX(4px);
    opacity: 0;
  }
`;

const Password = styled(Login)``;

const Button = styled.button`
  font-size: ${fontSize.medium}px;
  background-color: transparent;
`;
