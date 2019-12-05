/**
 * If the line segments intersect, return [x, y] of intersection. Otherwise, return false.
 * @param {[number, number]} p1 Start of line segment p
 * @param {[number, number]} p2 End of line segment p
 * @param {[number, number]} q1 Start of line segment q
 * @param {[number, number]} q2 End of line segment q
 */
export const intersection = (p1, p2, q1, q2) => {
  const [x1, y1] = p1
  const [x2, y2] = p2
  const [x3, y3] = q1
  const [x4, y4] = q2
  // Check if none of the lines are of length 0
	if ((x1 === x2 && y1 === y2) || (x3 === x4 && y3 === y4)) {
		return false
	}
	const denominator = ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1))
  // Lines are parallel
	if (denominator === 0) {
		return false
	}
	const ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator
	const ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denominator
  // is the intersection along the segments
	if (ua < 0 || ua > 1 || ub < 0 || ub > 1) {
		return false
	}
  // Return [x, y] of intersection
	let x = x1 + ua * (x2 - x1)
	let y = y1 + ua * (y2 - y1)
	return [x, y]
}
