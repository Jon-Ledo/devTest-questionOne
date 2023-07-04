export function isValidWalk(walk: string[]) {
  // check if walking directions are exactly 10 steps
  if (walk.length !== 10) return false

  // create a simple coordinate system + starting/end point
  let xAxis = 0
  let yAxis = 0

  // define which directions affect which coordinates with +1 and -1
  const coordinates = [
    { direction: 'n', value: 1 },
    { direction: 's', value: -1 },
    { direction: 'w', value: 1 },
    { direction: 'e', value: -1 },
  ]

  // create logic to simulate the walking
  walk.forEach((step) => {
    if (step === 'n') {
      xAxis += 1
    } else if (step === 's') {
      xAxis -= 1
    } else if (step === 'w') {
      yAxis += 1
    } else if (step === 'e') {
      yAxis -= 1
    }
  })

  // directions should take you back to start
  // if final coordinate is [0, 0] return true
  if (xAxis === 0 && yAxis === 0) {
    return true
  } else {
    // if not, return false
    return false
  }
}
