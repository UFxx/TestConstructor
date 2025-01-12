import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AllTests } from './components/AllTests/AllTests';
import { CreateTest } from './components/CreateTest/CreateTest';
import { Header } from './components/Header/Header';
import { QuestionEditor } from './components/CreateTest/QuestionsList/Question/QuestionEditor/QuestionEditor';

function App() {
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
