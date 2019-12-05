import { intersection } from './intersection.js'

export const input = ['R1010,D422,L354,U494,L686,U894,R212,U777,L216,U9,L374,U77,R947,U385,L170,U916,R492,D553,L992,D890,L531,U360,R128,U653,L362,U522,R817,U198,L126,D629,L569,U300,L241,U145,R889,D196,L450,D576,L319,D147,R985,U889,L941,U837,L608,D77,L864,U911,L270,D869,R771,U132,L249,U603,L36,D328,L597,U992,L733,D370,L947,D595,L308,U536,L145,U318,R55,D773,R175,D505,R483,D13,R780,U778,R445,D107,R490,U245,L587,U502,R446,U639,R150,U35,L455,D522,R866,U858,R394,D975,R513,D378,R58,D646,L374,D675,R209,U228,R530,U543,L480,U677,L912,D164,L573,U587,L784,D626,L994,U250,L215,U985,R684,D79,L877,U811,L766,U617,L665,D246,L408,U800,L360,D272,L436,U138,R240,U735,L681,U68,L608,D59,R532,D808,L104,U968,R887,U819,R346,U698,L317,U582,R516,U55,L303,U607,L457,U479,L510,D366,L583,U519,R878,D195,R970,D267,R842,U784,R9,D946,R833,D238,L232,D94,L860,D47,L346,U951,R491,D745,R849,U273,R263,U392,L341,D808,R696,U326,R886,D296,L865,U833,R241,U644,R729,D216,R661,D712,L466,D699,L738,U5,L556,D693,R912,D13,R48,U63,L877,U628,L689,D929,R74,U924,R612,U153,R417,U425,L879,D378,R79,D248,L3,U519,R366,U281,R439,D823,R149,D668,R326,D342,L213,D735,R504,U265,L718,D842,L565,U105,L214,U963,R518,D681,R642,U170,L111,U6,R697,U572,R18,U331,L618,D255,R534,D322,L399,U595,L246,U651,L836,U757,R417,D795,R291,U759,L568,U965,R828,D570,R350,U317,R338,D173,L74,D833,L650,D844,L70,U913,R594,U407,R674,D684,L481,D564,L128,D277,R851,D274,L435,D582,R469,U729,R387,D818,R443,U504,R414,U8,L842,U845,R275,U986,R53,U660,R661,D225,R614,U159,R477','L1010,D698,R442,U660,L719,U702,L456,D86,R938,D177,L835,D639,R166,D285,L694,U468,L569,D104,L234,D574,L669,U299,L124,D275,L179,D519,R617,U72,L985,D248,R257,D276,L759,D834,R490,U864,L406,U181,R911,U873,R261,D864,R260,U759,R648,U158,R308,D386,L835,D27,L745,U91,R840,U707,R275,U543,L663,U736,L617,D699,R924,U103,R225,U455,R708,U319,R569,U38,R315,D432,L179,D975,R519,D546,L295,U680,L685,U603,R262,D250,R7,U171,R261,U519,L832,U534,L471,U431,L474,U886,R10,D179,L79,D555,R452,U452,L832,U863,L367,U538,L237,D160,R441,U605,R942,U259,L811,D552,R646,D353,L225,D94,L35,D307,R752,U23,R698,U610,L379,D932,R698,D751,R178,D347,R325,D156,R471,D555,R558,D593,R773,U2,L955,U764,L735,U438,R364,D640,L757,U534,R919,U409,R361,U407,R336,D808,R877,D648,R610,U198,R340,U94,R795,D667,R811,U975,L965,D224,R565,D681,L64,U567,R621,U922,L665,U329,R242,U592,L727,D481,L339,U402,R213,D280,R656,U169,R976,D962,L294,D505,L251,D689,L497,U133,R230,D441,L90,D220,L896,D657,L500,U331,R502,U723,R762,D613,L447,D256,L226,U309,L935,U384,L740,D459,R309,D707,R952,D747,L304,D105,R977,D539,R941,D21,R291,U216,R132,D543,R515,U453,L854,D42,R982,U102,L469,D639,R559,D68,R302,U734,R980,D214,R107,D191,L730,D793,L63,U17,R807,U196,R412,D592,R330,D941,L87,D291,L44,D94,L272,D780,R968,U837,L712,D704,R163,U981,R537,U778,R220,D303,L196,D951,R163,D446,R11,D623,L72,D778,L158,U660,L189,D510,L247,D716,L89,U887,L115,U114,L36,U81,R927,U293,L265,U183,R331,D267,R745,D298,L561,D918,R299,U810,L322,U679,L739,D854,L581,U34,L862,D779,R23']

export const example = [
  'R8,U5,L5,D3',
  'U7,R6,D4,L4',
]

export const test1 = [
  'R75,D30,R83,U83,L12,D49,R71,U7,L72',
  'U62,R66,U55,R34,D71,R55,D58,R83',
]

export const test2 = [
  'R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51',
  'U98,R91,D20,R16,D67,R40,U7,R15,U6,R7',
]

/**
 * Format two sets of unformatted move sequences
 * @param {[string, string]} u unformatted move sequences
 */
export const formatMoves = (u) => {
  return [
    u[0].split(','),
    u[1].split(','),
  ]
}

/**
 * Parse the direction from a string like 'U300'
 * @param {string} s 
 * @returns {'U'|'R'|'L'|'D'} direction
 */
const direction = (s) => s.substring(0, 1)
/**
 * Parse the units from a string like 'U300'
 * @param {string} s 
 */
const units = (s) => parseInt(s.substring(1), 10)

/**
 * move current line position
 * @param {{coordinates: [number, number], steps: number}} p current position
 * @param {'U'|'D'|'L'|'R'} d direction
 * @param {number} u number of units
 * @returns next position
 */
const move = (p, d, u) => {
  let position = {
    coordinates: [...p.coordinates],
    steps: p.steps,
  }
  switch (d) {
    case 'U': 
      position.coordinates[1] += u
      position.steps += u
      return position
    case 'D':
      position.coordinates[1] -= u
      position.steps += u
      return position
    case 'R':
      position.coordinates[0] += u
      position.steps += u
      return position
    case 'L':
      position.coordinates[0] -= u
      position.steps += u
      return position
    default:
      break
  }
}

/**
 * Calculate all the positions of a line
 * @param {string[]} moves 
 * @returns array of [X, Y] coordinates and step counts
 */
export const calculatePositions = (moves) => {
  let position = {coordinates: [0,0], steps: 0}
  let positions = [position]
  for (let i=0; i<moves.length; i++) {
    positions.push(move(position, direction(moves[i]), units(moves[i])))
    position = positions[positions.length - 1]
  }
  return positions
}

/**
 * find the intersections between two lines from an array of [X, Y] coordinates
 * @param {{coordinates: [number, number], steps: number}[]} line1 
 * @param {{coordinates: [number, number], steps: number}[]} line2 
 * @returns {{coordinates: [number, number], steps1: number, steps2: number}[]} intersections
 */
export const findIntersections = (line1, line2) => {
  let intersections = []
  for (let i=1; i<line1.length; i++) {
    for (let j=1; j<line2.length; j++) {
      const point = intersection(line1[i-1].coordinates, line1[i].coordinates, line2[j-1].coordinates, line2[j].coordinates)
      if ( point && (point[0] !== 0 && point[1] !== 0)) {
        const intersection = {
          coordinates: point,
          steps1: line1[i-1].steps + findManhattanDistance(point, line1[i-1].coordinates),
          steps2: line2[j-1].steps + findManhattanDistance(point, line2[j-1].coordinates),
        }
        intersections.push(intersection)
      }
    }
  }
  return intersections
}

/**
 * Find the Manhattan distance between two coordinates
 * @param {[number, number]} c1
 * @param {[number, number]} c2
 */
export const findManhattanDistance = (c1, c2) => Math.abs(c1[0] - c2[0]) + Math.abs(c1[1] - c2[1])

/**
 * 
 * @param {{coordinates: [number, number], steps: number}[]} points 
 */
export const findShortestDistance = (points) => {
  const distances = points.map(p => findManhattanDistance(p.coordinates, [0,0]))
  return distances.sort((a, b) => a - b)[0]
}

/**
 * 
 * @param {[string, string]} u 
 */
const computeNearestIntersection = (u) => {
  const [moves1, moves2] = formatMoves(u)
  const line1 = calculatePositions(moves1)
  const line2 = calculatePositions(moves2)
  return findShortestDistance(findIntersections(line1, line2))
}

console.log(computeNearestIntersection(input)) // 806
