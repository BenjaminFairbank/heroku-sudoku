const completionChecker = (body, size) => {
  let list = [1,2,3,4].toString()
  if ( size === 9 ) { list = [1,2,3,4,5,6,7,8,9].toString() }

  let row1 = []; let row2 = []; let row3 = [];
  let row4 = []; let row5 = []; let row6 = [];
  let row7 = []; let row8 = []; let row9 = [];

  let col1 = []; let col2 = []; let col3 = [];
  let col4 = []; let col5 = []; let col6 = [];
  let col7 = []; let col8 = []; let col9 = [];

  let box1 = []; let box2 = []; let box3 = [];
  let box4 = []; let box5 = []; let box6 = [];
  let box7 = []; let box8 = []; let box9 = [];

  body.rows.forEach((row, y) => {
    if ( y === 0 ) { row1 = row.squares.filter(square => square.value !== ' ').map((sq) => parseInt(sq.value)) }
    if ( y === 1 ) { row2 = row.squares.filter(square => square.value !== ' ').map((sq) => parseInt(sq.value)) }
    if ( y === 2 ) { row3 = row.squares.filter(square => square.value !== ' ').map((sq) => parseInt(sq.value)) }
    if ( y === 3 ) { row4 = row.squares.filter(square => square.value !== ' ').map((sq) => parseInt(sq.value)) }

    if ( size === 9 ) {
      if ( y === 4 ) { row5 = row.squares.filter(square => square.value !== ' ').map((sq) => parseInt(sq.value)) }
      if ( y === 5 ) { row6 = row.squares.filter(square => square.value !== ' ').map((sq) => parseInt(sq.value)) }
      if ( y === 6 ) { row7 = row.squares.filter(square => square.value !== ' ').map((sq) => parseInt(sq.value)) }
      if ( y === 7 ) { row8 = row.squares.filter(square => square.value !== ' ').map((sq) => parseInt(sq.value)) }
      if ( y === 8 ) { row9 = row.squares.filter(square => square.value !== ' ').map((sq) => parseInt(sq.value)) }
    }

    row.squares.forEach((square, x) => {
      if ( x === 0 && square.value !== ' ') { col1.push(parseInt(square.value)) }
      if ( x === 1 && square.value !== ' ') { col2.push(parseInt(square.value)) }
      if ( x === 2 && square.value !== ' ') { col3.push(parseInt(square.value)) }
      if ( x === 3 && square.value !== ' ') { col4.push(parseInt(square.value)) }

      if ( size === 9 ) {
        if ( x === 4 && square.value !== ' ') { col5.push(parseInt(square.value)) }
        if ( x === 5 && square.value !== ' ') { col6.push(parseInt(square.value)) }
        if ( x === 6 && square.value !== ' ') { col7.push(parseInt(square.value)) }
        if ( x === 7 && square.value !== ' ') { col8.push(parseInt(square.value)) }
        if ( x === 8 && square.value !== ' ') { col9.push(parseInt(square.value)) }

        if ( y < 3 && x < 3 && square.value !== ' ') { box1.push(parseInt(square.value)) }
        if ( y < 3 && x >= 3 && x < 6 && square.value !== ' ') { box2.push(parseInt(square.value)) }
        if ( y < 3 && x >= 6 && square.value !== ' ') { box3.push(parseInt(square.value)) }
        if ( y >= 3 && y < 6 && x < 3 && square.value !== ' ') { box4.push(parseInt(square.value)) }
        if ( y >= 3 && y < 6 && x >= 3 && x < 6 ) { box5.push(parseInt(square.value)) }
        if ( y >= 3 && y < 6 && x >= 6 ) { box6.push(parseInt(square.value)) }
        if ( y >= 6 && x < 3 ) { box7.push(parseInt(square.value)) }
        if ( y >= 6 && x >= 3 && x < 6 ) { box8.push(parseInt(square.value)) }
        if ( y >= 6 && x >= 6 ) { box9.push(parseInt(square.value)) }

      } else {
        if ( y < 2 && x < 2 && square.value !== ' ') { box1.push(parseInt(square.value)) }
        if ( y < 2 && x >= 2 && square.value !== ' ') { box2.push(parseInt(square.value)) }
        if ( y >= 2 && x < 2 && square.value !== ' ') { box3.push(parseInt(square.value)) }
        if ( y >= 2 && x >= 2 && square.value !== ' ') { box4.push(parseInt(square.value)) }
      }
    });
  });

  let completedBoxes = [
    box1.sort().toString() === list,
    box2.sort().toString() === list,
    box3.sort().toString() === list,
    box4.sort().toString() === list
  ]

  let completedRows = [
    row1.sort().toString() === list,
    row2.sort().toString() === list,
    row3.sort().toString() === list,
    row4.sort().toString() === list
  ]

  let completedColumns = [
    col1.sort().toString() === list,
    col2.sort().toString() === list,
    col3.sort().toString() === list,
    col4.sort().toString() === list
  ]

  if ( size === 9 ) {
    completedBoxes.push(box5.sort().toString() === list)
    completedBoxes.push(box6.sort().toString() === list)
    completedBoxes.push(box7.sort().toString() === list)
    completedBoxes.push(box8.sort().toString() === list)
    completedBoxes.push(box9.sort().toString() === list)

    completedRows.push(row5.sort().toString() === list)
    completedRows.push(row6.sort().toString() === list)
    completedRows.push(row7.sort().toString() === list)
    completedRows.push(row8.sort().toString() === list)
    completedRows.push(row9.sort().toString() === list)

    completedColumns.push(col5.sort().toString() === list)
    completedColumns.push(col6.sort().toString() === list)
    completedColumns.push(col7.sort().toString() === list)
    completedColumns.push(col8.sort().toString() === list)
    completedColumns.push(col9.sort().toString() === list)
  }
  
  return ({
    boxes: completedBoxes,
    rows: completedRows,
    columns: completedColumns
  })
}

export default completionChecker
