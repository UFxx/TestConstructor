import { createSlice } from '@reduxjs/toolkit';
import { ITest } from './types';
import { RootState } from './store';

const initialState: ITest[] = localStorage.getItem('tests')
  ? JSON.parse(localStorage.getItem('tests')!)
  : [];

const addTestReducer = createSlice({
  name: 'changeTest',
  initialState,
  reducers: {
    addTest: (state, action) => {
      const testId = Number(action.payload.newId);
      return [
        ...state,
        { id: testId, name: '', img: '', completed: false, questions: [] }
      ];
    },
    deleteTest: (state, action) => {
      const testId = Number(action.payload.testId);
      return [...state.filter((test) => test.id !== testId)];
    },
    changeTestTitle: (state, action) => {
      const testId = Number(action.payload.testId);
      const newName = action.payload.newName;

      return state.map((t) => {
        if (t.id === testId) {
          return { ...t, name: newName };
        } else {
          return t;
        }
      });
    },
    addQuestion: (state, action) => {
      const testId = Number(action.payload.testId);

      return state.map((test) => {
        if (test.id === testId) {
          return {
            ...test,
            questions: [
              ...test.questions,
              {
                id: test.questions.length,
                questionText: 'Вопрос',
                answers: []
              }
            ]
          };
        } else {
          return test;
        }
      });
    },
    deleteQuestion: (state, action) => {
      const testId = Number(action.payload.testId);
      const questId = Number(action.payload.questId);

      return state.map((test) => {
        if (test.id === testId) {
          return {
            ...test,
            questions: [
              ...test.questions.filter((question) => question.id !== questId)
            ]
          };
        } else {
          return test;
        }
      });
    },
    changeQuestionTitle: (state, action) => {
      const testId = Number(action.payload.testId);
      const questId = Number(action.payload.questId);
      const newName = action.payload.newName;

      return state.map((test) => {
        if (test.id === testId) {
          return {
            ...test,
            questions: test.questions.map((question) => {
              if (question.id === questId) {
                return { ...question, questionText: newName };
              } else {
                return question;
              }
            })
          };
        } else {
          return test;
        }
      });
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
