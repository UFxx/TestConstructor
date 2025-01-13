import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AllTests } from './components/AllTests/AllTests';
import { CreateTest } from './components/CreateTest/CreateTest';
import { Header } from './components/Header/Header';
import { QuestionEditor } from './components/CreateTest/QuestionsList/Question/QuestionEditor/QuestionEditor';
import { useEffect } from 'react';
import { useAppSelector } from './hooks';

function App() {
  const testsState = useAppSelector((state) => state.tests);

  useEffect(() => {
    localStorage.setItem('tests', JSON.stringify(testsState));
  }, [testsState]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<AllTests />}></Route>
          <Route path="/alltests" element={<AllTests />}></Route>
          <Route path="/createtest" element={<CreateTest />}></Route>
          <Route
            path="/createtest/question"
            element={<QuestionEditor />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
