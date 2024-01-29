import { createNote } from '../reducers/noteReducer'
import { useDispatch } from 'react-redux'

const NoteForm = () => {
  const dispatch = useDispatch()

  const addNote = async (e) => {
    e.preventDefault()
    const content = e.target.note.value
    e.target.note.value = ''
    dispatch(createNote(content))
  }

  return (
    <form onSubmit={addNote}>
      <input type="text" name="note" />
      <button type="submit">add</button>
    </form>
  )
}

export default NoteForm
