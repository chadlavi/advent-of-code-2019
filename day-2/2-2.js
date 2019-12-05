import {input, loop} from './2-1.js'
const goal = 19690720

const findNumbers = (g = goal) => {
  for (let i=0; i<100; i++) {
    for (let j=0; j<100; j++) {
      const testSet = Array.from(input)
      testSet[1] = i
      testSet[2] = j
      if (loop(testSet)[0] === g) {
        return [i, j]
      }
    }
  }
}

const [noun, verb] = findNumbers() // [90, 74]

console.log(100 * noun + verb) // 9074