import { input, calculatePositions, formatMoves, findIntersections, example, test1, test2 } from './3-1.js';

const getMinSteps = (data) => {
  const [line1, line2] = formatMoves(data)
  const intersections = findIntersections(calculatePositions(line1), calculatePositions(line2))
  const distances = intersections.map(i => i.steps1 + i.steps2)
  return distances.sort((a, b) => a - b)[0]
}

console.log(getMinSteps(input)) // 66076
console.log(getMinSteps(example)) // 30
console.log(getMinSteps(test1)) // 610
console.log(getMinSteps(test2)) //410
