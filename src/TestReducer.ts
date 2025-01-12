import { createSlice } from '@reduxjs/toolkit';
import { ITest } from './types';
import { RootState } from './store';

const initialState: ITest[] = localStorage.getItem('tests')
  ? JSON.parse(localStorage.getItem('tests')!)
  : [];

const addTestReducer = createSlice({
  name: 'addTest',
  initialState,
  reducers: {
    addTest: (state, action) => {
      const testId = action.payload.newId.toString();

      state.push({
        id: testId,
        name: '',
        img: '',
        completed: false,
        questions: []
      });

      new URL(window.location.toString()).searchParams.set('id', testId);
      window.location.href = `/createtest?testid=${testId}`;
      localStorage.setItem('tests', JSON.stringify(state));
    },
    deleteTest: (state, action) => {
      const testId = action.payload.testId;
      state = state.filter((test) => test.id !== testId);
      window.location.href = '/alltests';
      localStorage.setItem('tests', JSON.stringify(state));
    },
    changeTestTitle: (state, action) => {
      state.forEach((test) => {
        if (test.id.toString() === action.payload.idx) {
          test.name = action.payload.newName;
        }
      });
      localStorage.setItem('tests', JSON.stringify(state));
    },
    addQuestion: (state, action) => {
      const testId = action.payload.testId;

      state.forEach((test) => {
        if (test.id === testId) {
          test.questions.push({
            id: test.questions.length,
            questionText: `Вопрос`,
            answers: []
          });
        }
      });
      localStorage.setItem('tests', JSON.stringify(state));
    },
    deleteQuestion: (state, action) => {
      const testId = action.payload.testId;
      const questId = action.payload.questId;

      state.map((test) => {
        if (test.id === testId) {
          test.questions = test.questions.filter((q) => q.id !== questId);
        }
      });
      localStorage.setItem('tests', JSON.stringify(state));
    },
    changeQuestionTitle: (state, action) => {
      const testId = action.payload.testId;
      const questId = action.payload.questId;
      const newName = action.payload.newName;

      state.map((test) => {
        if (test.id === testId) {
          test.questions[questId].questionText = newName;
        }
      });
      localStorage.setItem('tests', JSON.stringify(state));
    }
  }
});

export const {
  addTest,
  changeTestTitle,
  addQuestion,
  deleteQuestion,
  changeQuestionTitle,
  deleteTest
} = addTestReducer.actions;
export const selectValue = (state: RootState) => state.tests;
export default addTestReducer.reducer;
