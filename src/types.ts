export interface ITest {
  id: number;
  name: string;
  img: string;
  questions: {
    id: number;
    questionText: string;
    questionImage: string;
    answers: { id: number; answerText: string; isRightAnswer: boolean }[];
  }[];
  completed: boolean;
}

export interface IIds {
  testId: number;
  questId: number;
}

export type IRole = 'user' | 'admin' | 'unauthorized' | undefined;
