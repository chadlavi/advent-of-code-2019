import {min, max, digitArray, neverDecreases} from './4-1.js'

/**
 * 
 * @param {number} n 
 */
const hasOnlyTwoConsecutiveDigits = (n) => {
  const digits = digitArray(n)
  for (let i = 1; i < digits.length; i++) {
    // if a number is equal to the previous number...
    if (digits[i] === digits[i-1]) {
      if (
        // ...but it's not equal to the next (or the next does not exist)...
        ((digits[i+1] && digits[i] !== digits[i+1]) || !digits[i+1])
        // ...and it's not equal to the number before the previous (or that number does not exist)
        && ((digits[i-2] && digits[i] !== digits[i-2]) || !digits[i-2])
        ) {
        return true
      }
    }
  }
  return false
}

/**
 * 
 * @param {number} min 
 * @param {number} max 
 */
const findMatches = (min, max) => {
  const matches = []
  for (let i = min; i <= max; i++) {
    if (neverDecreases(i) && hasOnlyTwoConsecutiveDigits(i)) {
      matches.push(i)
    }
  }
  return matches
}

console.log(findMatches(min, max).length) //145
