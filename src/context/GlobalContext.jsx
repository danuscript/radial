import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';
import level1 from '../levels/level1'

const initialState = {
  level: level1,
  circles: [],
  won: false,
  moves: 0,
};

// level = getLevel() || 1
initialState.circles = Array(initialState.level.circles.length).fill(1);

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const changePosition = (circle) => {
    dispatch({
      type: 'CHANGE_POSITION',
      payload: circle,
    });
  };
  const win = () => {
    dispatch({
      type: 'WIN',
    })
  };
  const move = () => {
    dispatch({
      type: 'MOVE',
    })
  };
  const setLevel = (level) => {
    dispatch({
      type: 'SET_LEVEL',
      payload: level,
    })
  };
  const values = {
    ...state,
    changePosition,
    win,
    move,
    setLevel,
  };
  return (
    <GlobalContext.Provider value={values}>
      {children}
    </GlobalContext.Provider>
  );
};
