const squareCounter = (body) => {
  let givenCount = 0
  let filledCount = 0
  let emptyCount = 0
  let total = 0

  body.rows.forEach((row) => {
    row.squares.forEach((square) => {
      if (square.given === true) { givenCount++ }
      if (square.value === ' ') { emptyCount++ } else { filledCount++ }
      total++
    })
  })

  const filledByUser = filledCount - givenCount
  const totalToBeFilledByUser = total - givenCount
  const percentComplete = 100*(filledByUser/totalToBeFilledByUser)

  return {
    percentageCompleted: percentComplete.toFixed(1),
    squaresLeft: emptyCount,
  }
}

export default squareCounter
