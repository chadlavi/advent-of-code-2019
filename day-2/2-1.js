export const input = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,10,1,19,1,19,6,23,2,13,23,27,1,27,13,31,1,9,31,35,1,35,9,39,1,39,5,43,2,6,43,47,1,47,6,51,2,51,9,55,2,55,13,59,1,59,6,63,1,10,63,67,2,67,9,71,2,6,71,75,1,75,5,79,2,79,10,83,1,5,83,87,2,9,87,91,1,5,91,95,2,13,95,99,1,99,10,103,1,103,2,107,1,107,6,0,99,2,14,0,0]

export const compute = (intcode=[99], i=0) => {
  let result = Array.from(intcode)
  let destination
  switch (result[i]) {
    case 1:
      // add
      destination = result[i+3]
      const sum = result[result[i+1]] + result[result[i+2]]
      result[destination === 0 ? 0 : destination] = sum
      return result
    case 2:
      // multiply
      destination = result[i+3]
      const product = result[result[i+1]] * result[result[i+2]]
      result[destination === 0 ? 0 : destination] = product
      return result
    case 99:
      // exit
      return result
    default:
      return result
  }
}

export const loop = (intcode = [99]) => {
  let result = Array.from(intcode)
  for (let i=0; i< intcode.length; i+=4) {
    result = compute(result, i)
  }
  return result
}

const correctedInput = Array.from(input)

correctedInput[1] = 12
correctedInput[2] = 2

console.log(loop(correctedInput)[0]) // 2842648
