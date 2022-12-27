import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Circle from "./Circle";

const Board = () => {
  const { level } = useContext(GlobalContext);
  return (
    <div 
    className='board'
    style={{height: `${100 + (level.height - 1) * 50}px`}}
    >
      {level.circles.map((circle, index) => (
        <Circle
          key={`${level.number},${index}`}
          index={index}
          top={circle.top}
          left={circle.left}
          angle={circle.angle}
          color1={circle.color1}
          color2={circle.color2}
          positions={circle.positions}
        />
      ))}
    </div>
  )
}

export default Board;