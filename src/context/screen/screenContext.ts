import { createContext } from 'react';

export interface IScreenContext {
  id: string | null;
  changeScreen?: (id: string | null) => void;
}

export const ScreenContext = createContext<IScreenContext>({
  id: null,
});
