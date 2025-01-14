import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AllTests } from './components/AllTests/AllTests';
import { EditTest } from './components/EditTest/EditTest';
import { Header } from './components/Header/Header';
import { EditQuestion } from './components/EditTest/QuestionsList/Question/EditQuestion/EditQuestion';
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
          <Route path="/createtest" element={<EditTest />}></Route>
          <Route path="/createtest/question" element={<EditQuestion />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
