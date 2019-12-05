export const min = 168630
export const max = 718098

/**
 * 
 * @param {number} n 
 */
export const digitArray = (n) => (''+n).split('').map(Number)

/**
 * 
 * @param {number} n 
 */
const hasTwoConsecutiveDigits = (n) => {
  const digits = digitArray(n)
  for (let i = 1; i < digits.length; i++) {
    if (digits[i] === digits[i-1]) {
      return true
    }
  }
  return false
}

/**
 * 
 * @param {number} n 
 */
export const neverDecreases = (n) => {
  const digits = digitArray(n)
  for (let i = 1; i < digits.length; i++) {
    if (digits[i] < digits[i-1]) {
      return false
    }
  }
  return true
}

/**
 * 
 * @param {number} min 
 * @param {number} max 
 */
const findMatches = (min, max) => {
  const matches = []
  for (let i = min; i <= max; i++) {
    if (neverDecreases(i) && hasTwoConsecutiveDigits(i)) {
      matches.push(i)
    }
  }
  return matches
}

console.log(findMatches(min, max).length) //1686
