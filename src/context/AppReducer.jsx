export default function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_POSITION': {
      return {
        ...state,
        circles: state.circles.map((circle, index) => {
          if (index !== action.payload) return circle;
          return Math.max((circle + 1) % (state.level.circles[index].positions + 1), 1);
        }),
      };
    }
    case 'WIN': {
      return { ...state, won: true };
    }
    case 'MOVE': {
      return { ...state, moves: state.moves + 1 };
    }
    case 'SET_LEVEL': {
      if (action.payload) return { 
        ...state,
        moves: 0,
        level: action.payload,
        circles: Array(action.payload.circles.length).fill(1),
        won: false
      }
      return state;
    }
    default: return state;
  };
};
