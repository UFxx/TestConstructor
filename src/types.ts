export interface ITest {
  id: number;
  name: string;
  img: string;
  questions: {
    id: number;
    questionText: string;
    answers: { id: number; answerText: string; isRightAnswer: boolean }[];
  }[];
  completed: boolean;
}
