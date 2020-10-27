const organizeBoard = body => {
  let orgRowArr = new Array(body.rows.length)

  body.rows.forEach((row) => {
    orgRowArr.splice(row.index, 1, row)
  });
  body["rows"] = orgRowArr

  body.rows.forEach((row) => {
    let orgSqrArr = new Array(row.squares.length)
    row.squares.forEach((square) => {
      orgSqrArr.splice(square.x, 1, square)
    });
    row["squares"] = orgSqrArr
  });

  return body
}

export default organizeBoard
