import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { createGlobalStyle } from 'styled-components';
import { store } from './store';
import { Provider } from 'react-redux';
import { colors } from './styleVariables.ts';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  p, a, button, a, li, label, input {
    font-family: "Nunito", serif;
    font-weight: 400;
  }

  a {
    text-decoration: none;
    color: ${colors.black};
  }
`;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </StrictMode>
);
