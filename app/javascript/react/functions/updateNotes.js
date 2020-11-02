import conflictChecker from './conflictChecker'

const updateNotes = (body, size) => {

  body.rows.forEach((row) => {
    row.squares.forEach((square) => {
      let conflicts = conflictChecker(body, size, square.x, square.y)
      conflicts = conflicts.map((num) => num.toString())

      let notesArray = square.notes.split('')

      notesArray = notesArray.map((note) => {
        if (conflicts.includes(note)) { return note = '.' } else { return note }
      })

      square['notes'] = notesArray.join('')
    })
  })

  return body
}



export default updateNotes
