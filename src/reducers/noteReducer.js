import { createSlice } from '@reduxjs/toolkit'

const noteSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    createNote(state, action) {
      state.push(action.payload)
    },
    toggleImportanceOf(state, action) {
      const noteToChange = action.payload

      return state.map((note) =>
        note.id !== noteToChange.id ? note : noteToChange
      )
    },
    appendNotes(state, action) {
      state.push(action.payload)
    },
    setNotes(state, action) {
      return action.payload
    },
  },
})

export const { createNote, toggleImportanceOf, appendNotes, setNotes } =
  noteSlice.actions
export default noteSlice.reducer
