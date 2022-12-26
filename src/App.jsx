import './App.css';
import Circle from './components/Circle';

function App() {
  return (
    <>
      <h1>radial</h1>
      <div className='board'>
        <Circle color1='geraldine' color2='tangerineYellow' rotate={30} left={-27} />
        <Circle color1='lightCobaltBlue' color2='tangerineYellow' rotate={-30} left={27} />
        <Circle color1='geraldine' color2='lightCobaltBlue' rotate={90} top={47} left={0} />
      </div>
    </>
  );
}

export default App;
