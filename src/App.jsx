import './App.css';
import Board from './components/Board';
import React, { useContext, useEffect } from 'react';
import { GlobalContext, GlobalProvider } from './context/GlobalContext';

const App = () => {
  return (
    <GlobalProvider>
      <Main />
    </GlobalProvider>
  );
};

const Main = () => {
  const { circles, level, win, won, moves, setLevel } = useContext(GlobalContext);
  useEffect(() => {
    const won = circles.every((circle, index) => (
      circle === level.circles[index].winPosition
    ));
    if (won) {
      win();
    }
  }, [circles, level]);
  return (
    <>
      <h1>radial</h1>
      <h3 className='level'>level {level.number}</h3>
      <Board />
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 15px',
      }}>
        <div>
          <p>moves: {moves}</p>
          {won && <div style={{ display: 'flex', gap: '8px' }}>
            <p>solved.</p>
            <p 
              style={{textDecoration: 'underline', cursor: 'pointer'}}
              onClick={() => setLevel(level.next)}
            >next?</p>
          </div>}
        </div>
        <div>
          <p>goal</p>
        </div>
      </div>
    </>
  );
}

export default App;
