import { CHANGE_SCREEN } from '../types';

const handlers: Record<string, Function> = {
  [CHANGE_SCREEN]: (_state: string | null, id: string | null) => id,
  DEFAULT: (state: string | null) => state,
};

export const screenReducer = (state: string | null, action: any) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action.value);
};
