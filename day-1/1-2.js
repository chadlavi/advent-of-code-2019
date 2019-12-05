import {fuelRequirements, calculateFuel} from './1-1.js'

const recursiveCalculateFuel = (r = 0) => {
  let fuel = calculateFuel(r)
  let f = fuel
  while (f > 0) {
    f = calculateFuel(f)
    if (f > 0) fuel += f
  }
  return fuel
}

const fuel = fuelRequirements
  .map(r => recursiveCalculateFuel(r))
  .reduce((t, r) => t + r)

console.log(fuel) // 5081802
