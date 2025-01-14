import { createSlice } from '@reduxjs/toolkit';
import { ITest } from './types';
import { RootState } from './store';

const initialState: ITest[] = localStorage.getItem('tests')
  ? JSON.parse(localStorage.getItem('tests')!)
  : [];

// t --> test
// q --> question
// a --> answer

const addTestReducer = createSlice({
  name: 'changeTest',
  initialState,
  reducers: {
    addTest: (state, action) => {
      const testId = action.payload.newId;
      return [
        ...state,
        {
          id: testId,
          name: 'Без названия',
          img: '',
          completed: false,
          questions: []
        }
      ];
    },
    addTestImage: (state, action) => {
      const testId = action.payload.testId;
      const dataURL = action.payload.dataURL;

      return state.map((t) => {
        if (t.id === testId) {
          return { ...t, img: dataURL };
        } else return t;
      });
    },
    deleteTest: (state, action) => {
      const testId = action.payload.testId;
      return state.filter((t) => t.id !== testId);
    },
    changeTestTitle: (state, action) => {
      const testId = action.payload.testId;
      let newName = action.payload.newName;

      if (newName === '' || newName === ' ') {
        newName = 'Без названия';
      }

      return state.map((t) => {
        if (t.id === testId) {
          return { ...t, name: newName };
        } else return t;
      });
    },
    addQuestion: (state, action) => {
      const testId = action.payload.testId;

      return state.map((t) => {
        if (t.id === testId) {
          return {
            ...t,
            questions: [
              ...t.questions,
              {
                id: t.questions.length,
                questionText: 'Вопрос',
                questionImage: '',
                answers: []
              }
            ]
          };
        } else return t;
      });
    },
    addQuestionImage: (state, action) => {
      const testId = action.payload.testId;
      const questId = action.payload.questId;
      const dataURL = action.payload.dataURL;

      return state.map((t) => {
        if (t.id === testId) {
          return {
            ...t,
            questions: t.questions.map((q) => {
              if (q.id === questId) {
                return { ...q, questionImage: dataURL };
              } else return q;
            })
          };
        } else return t;
      });
    },
    deleteQuestion: (state, action) => {
      const testId = action.payload.testId;
      const questId = action.payload.questId;

      return state.map((t) => {
        if (t.id === testId) {
          return {
            ...t,
            questions: [...t.questions.filter((q) => q.id !== questId)]
          };
        } else return t;
      });
    },
    changeQuestionTitle: (state, action) => {
      const testId = action.payload.testId;
      const questId = action.payload.questId;
      let newName = action.payload.newName;

      if (newName === '' || newName === ' ') {
        newName = 'Без названия';
      }

      return state.map((t) => {
        if (t.id === testId) {
          return {
            ...t,
            questions: t.questions.map((q) => {
              if (q.id === questId) {
                return { ...q, questionText: newName };
              } else return q;
            })
          };
        } else return t;
      });
    },
    addAnswer: (state, action) => {
      const testId = action.payload.testId;
      const questId = action.payload.questId;

      return state.map((t) => {
        if (t.id === testId) {
          return {
            ...t,
            questions: t.questions.map((q) => {
              if (q.id === questId) {
                return {
                  ...q,
                  answers: [
                    ...q.answers,
                    {
                      id: q.answers.length,
                      answerText: 'Ответ',
                      isRightAnswer: false
                    }
                  ]
                };
              } else return q;
            })
          };
        } else return t;
      });
    },
    deleteAnswer: (state, action) => {
      const testId = action.payload.testId;
      const questId = action.payload.questId;
      const answerId = action.payload.answerId;

      return state.map((t) => {
        if (t.id === testId) {
          return {
            ...t,
            questions: t.questions.map((q) => {
              if (q.id === questId) {
                return {
                  ...q,
                  answers: q.answers.filter((a) => a.id !== answerId)
                };
              } else return q;
            })
          };
        } else return t;
      });
    },
    changeAnswerTitle: (state, action) => {
      const testId = action.payload.testId;
      const questId = action.payload.questId;
      const answerId = action.payload.answerId;
      let newName = action.payload.newName;

      if (newName === '' || newName === ' ') {
        newName = 'Без названия';
      }

      return state.map((t) => {
        if (t.id === testId) {
          return {
            ...t,
            questions: t.questions.map((q) => {
              if (q.id === questId) {
                return {
                  ...q,
                  answers: q.answers.map((a) => {
                    if (a.id === answerId) {
                      return { ...a, answerText: newName };
                    } else return a;
                  })
                };
              } else return q;
            })
          };
        } else return t;
      });
    },
    setRightAnswer: (state, action) => {
      const testId = action.payload.testId;
      const questId = action.payload.questId;
      const answerId = action.payload.answerId;

      return state.map((t) => {
        if (t.id === testId) {
          return {
            ...t,
            questions: t.questions.map((q) => {
              if (q.id === questId) {
                return {
                  ...q,
                  answers: q.answers.map((a) => {
                    if (a.id === answerId) {
                      return { ...a, isRightAnswer: !a.isRightAnswer };
                    } else return { ...a, isRightAnswer: false };
                  })
                };
              } else return q;
            })
          };
        } else return t;
      });
    }
  }
});

export const {
  addTest,
  addTestImage,
  changeTestTitle,
  addQuestion,
  addQuestionImage,
  deleteQuestion,
  changeQuestionTitle,
  deleteTest,
  addAnswer,
  deleteAnswer,
  changeAnswerTitle,
  setRightAnswer
} = addTestReducer.actions;
export const selectValue = (state: RootState) => state.tests;
export default addTestReducer.reducer;
