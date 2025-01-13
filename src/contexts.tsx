import { IIds } from './types';
import { createContext } from 'react';

export const IdsContext = createContext<IIds>({ testId: 0, questId: 0 });
export const TestIdContext = createContext<Pick<IIds, 'testId'>>({
  testId: 0
});
