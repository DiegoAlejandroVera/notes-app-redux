import { toggleImportanceOf } from '../reducers/noteReducer'
import { useDispatch, useSelector } from 'react-redux'
import noteService from '../services/notes'

const Note = ({ note, handleClick }) => {
  return (
    <li onClick={handleClick}>
      {note.content}{' '}
      <strong>{note.important ? 'important' : 'not important'}</strong>
    </li>
  )
}

const Notes = () => {
  const notes = useSelector(({ filter, notes }) => {
    if (filter === 'ALL') {
      return notes
    }
    return filter === 'IMPORTANT'
      ? notes.filter((note) => note.important)
      : notes.filter((note) => !note.important)
  })

  const notesArr = useSelector((state) => state.notes)

  const dispatch = useDispatch()

  const toggleImportance = (id) => {
    const note = notesArr.find((n) => n.id === id)
    const changedNote = { ...note, important: !note.important }
    noteService.updateNote(id, changedNote)
    dispatch(toggleImportanceOf(changedNote))
  }

  return (
    <ul>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          handleClick={() => toggleImportance(note.id)}
        />
      ))}
    </ul>
  )
}

export default Notes
