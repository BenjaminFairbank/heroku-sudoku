const conflictChecker = (body, x, y) => {
  let outlaws = []
  let rowOutlaws = []
  let columnOutlaws = []
  let boxOutlaws = []

  body.rows[y].squares.forEach((square) => {
    if (square.value !== ' ') {
      rowOutlaws.push(square.value)
    }
  });

  body.rows.forEach((row) => {
    if (row.squares[x].value !== ' ') {
      columnOutlaws.push(row.squares[x].value)
    }
  });

  if (x < 3 && y < 3) {
    const selectRows = body.rows.filter((row) => {
      if (row.index < 3) {
        return row
      }
    })
    const box = selectRows.forEach((row) => {
      row.squares.forEach((square) => {
        if (square.x < 3 && square.value !== ' ') {
          boxOutlaws.push(square.value)
        }
      })
    });
  } else if (x < 3 && y >= 3 && y < 6) {
    const selectRows = body.rows.filter((row) => {
      if (row.index >= 3 && row.index < 6) {
        return row
      }
    })
    const box = selectRows.forEach((row) => {
      row.squares.forEach((square) => {
        if (square.x < 3 && square.value !== ' ') {
          boxOutlaws.push(square.value)
        }
      })
    });
  } else if (x < 3 && y >= 6) {
    const selectRows = body.rows.filter((row) => {
      if (row.index >= 6) {
        return row
      }
    })
    const box = selectRows.forEach((row) => {
      row.squares.forEach((square) => {
        if (square.x < 3 && square.value !== ' ') {
          boxOutlaws.push(square.value)
        }
      })
    });
  } else if (x >= 3 && x < 6 && y < 3) {
    const selectRows = body.rows.filter((row) => {
      if (row.index < 3) {
        return row
      }
    })
    const box = selectRows.forEach((row) => {
      row.squares.forEach((square) => {
        if (square.x >= 3 && square.x < 6 && square.value !== ' ') {
          boxOutlaws.push(square.value)
        }
      })
    });
  } else if (x >= 3 && x < 6 && y >= 3 && y < 6) {
    const selectRows = body.rows.filter((row) => {
      if (row.index >= 3 && row.index < 6) {
        return row
      }
    })
    const box = selectRows.forEach((row) => {
      row.squares.forEach((square) => {
        if (square.x >= 3 && square.x < 6 && square.value !== ' ') {
          boxOutlaws.push(square.value)
        }
      })
    });
  } else if (x >= 3 && x < 6 && y >= 6) {
    const selectRows = body.rows.filter((row) => {
      if (row.index >= 6) {
        return row
      }
    })
    const box = selectRows.forEach((row) => {
      row.squares.forEach((square) => {
        if (square.x >= 3 && square.x < 6 && square.value !== ' ') {
          boxOutlaws.push(square.value)
        }
      })
    });
  } else if (x >= 6 && y < 3) {
    const selectRows = body.rows.filter((row) => {
      if (row.index < 3) {
        return row
      }
    })
    const box = selectRows.forEach((row) => {
      row.squares.forEach((square) => {
        if (square.x >= 6 && square.value !== ' ') {
          boxOutlaws.push(square.value)
        }
      })
    });
  } else if (x >= 6 && y >= 3 && y < 6) {
    const selectRows = body.rows.filter((row) => {
      if (row.index >= 3 && row.index < 6) {
        return row
      }
    })
    const box = selectRows.forEach((row) => {
      row.squares.forEach((square) => {
        if (square.x >= 6 && square.value !== ' ') {
          boxOutlaws.push(square.value)
        }
      })
    });
  } else if ( x >= 6 && y >= 6) {
    const selectRows = body.rows.filter((row) => {
      if (row.index >= 6) {
        return row
      }
    })
    const box = selectRows.forEach((row) => {
      row.squares.forEach((square) => {
        if (square.x >= 6 && square.value !== ' ') {
          boxOutlaws.push(square.value)
        }
      })
    });
  }

  outlaws = rowOutlaws

  columnOutlaws.forEach((n) => {
    if (!outlaws.includes(n)) { outlaws.push(n) }
  })

  boxOutlaws.forEach((n) => {
    if (!outlaws.includes(n)) { outlaws.push(n) }
  })

  outlaws = outlaws.map(value => parseInt(value))

  return outlaws
}


export default conflictChecker
