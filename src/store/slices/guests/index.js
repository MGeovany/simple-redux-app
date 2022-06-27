import { createSlice } from '@reduxjs/toolkit'

export const guestSlice = createSlice({
  name: 'guests',
  initialState: {
    value: null
  },
  reducers: {
    addGuest: (state, action) => {
      state.value = action.payload
    },
    setGuest: (state, action) => {
      state.persons = action.payload
    }
  }
})

export const { addGuest } = guestSlice.actions

export default guestSlice.reducer
