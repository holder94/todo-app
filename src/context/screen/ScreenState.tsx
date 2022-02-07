import React, { useReducer } from 'react';
import { CHANGE_SCREEN } from '../types';

import { ScreenContext } from './screenContext';
import { screenReducer } from './screenReducer';

export const ScreenState: React.FC = ({ children }) => {
  const initialId: string | null = null;
  const [state, dispatch] = useReducer(screenReducer, initialId);

  const changeScreen = (id: string | null) =>
    dispatch({ type: CHANGE_SCREEN, value: id });

  return (
    <ScreenContext.Provider
      value={{
        id: state,
        changeScreen,
      }}
    >
      {children}
    </ScreenContext.Provider>
  );
};
