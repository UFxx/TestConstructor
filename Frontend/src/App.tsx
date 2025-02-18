import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AllTests } from './components/AllTests/AllTests';
import { EditTest } from './components/EditTest/EditTest';
import { Header } from './components/Header/Header';
import { EditQuestion } from './components/EditTest/QuestionsList/Question/EditQuestion/EditQuestion';
import { useEffect, useState } from 'react';
import { useAppSelector } from './hooks';
import { ExecTest } from './components/ExecTest/ExecTest';
import { ExecQuestion } from './components/ExecTest/ExecQuestion/ExecQuestion';
import { EndTest } from './components/ExecTest/EndTest/EndTest';
import { Auth } from './components/Auth/Auth';
import { IRole } from './types';

function App() {
  const [role, setRole] = useState<IRole>(
    localStorage.getItem('role') as IRole
  );

  const [isAuth, setIsAuth] = useState(() =>
    localStorage.getItem('isAuth')
      ? JSON.parse(localStorage.getItem('isAuth')!)
      : false
  );

  const testsState = useAppSelector((state) => state.tests);

  useEffect(() => {
    if (localStorage.getItem('role') === null) {
      localStorage.setItem('role', 'unauthorized');
      setRole('unauthorized');
    }
    localStorage.setItem('isAuth', JSON.stringify(isAuth));
    localStorage.setItem('role', role!);
    localStorage.setItem('tests', JSON.stringify(testsState));
  }, [testsState, isAuth, role]);

  return (
    <>
      <BrowserRouter>
        <Header isAuth={isAuth} setIsAuth={setIsAuth} setRole={setRole} />
        <Routes>
          <Route
            path="/"
            element={
              isAuth ? (
                <AllTests role={role} />
              ) : (
                <Auth isAuth={isAuth} setIsAuth={setIsAuth} setRole={setRole} />
              )
            }
          ></Route>
          <Route
            path="/auth"
            element={
              <Auth isAuth={isAuth} setIsAuth={setIsAuth} setRole={setRole} />
            }
          ></Route>
          <Route
            path="/alltests"
            element={
              isAuth ? (
                <AllTests role={role} />
              ) : (
                <Auth isAuth={isAuth} setIsAuth={setIsAuth} setRole={setRole} />
              )
            }
          ></Route>
          {role === 'admin' ? (
            <Route path="/createtest" element={<EditTest />}></Route>
          ) : (
            <Route path="/exectest" element={<ExecTest />}></Route>
          )}

          <Route path="/exectest/question" element={<ExecQuestion />}></Route>
          <Route path="/exectest/endtest" element={<EndTest />}></Route>
          <Route path="/createtest/question" element={<EditQuestion />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
