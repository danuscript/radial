import level2 from "./level2";

const circles = [
  {
    positions: 2,
    color1: 'lightCobaltBlue',
    color2: 'geraldine',
    angle: 0,
    top: 0,
    left: -23,
    winPosition: 2
  },
  {
    positions: 2,
    color1: 'lightCobaltBlue',
    color2: 'tangerineYellow',
    angle: 0,
    top: 0,
    left: 23,
    winPosition: 2,
  }
];

const level1 = {
  circles,
  height: 1,
  number: 1,
  next: level2,
};

export default level1;
