import { configureStore } from '@reduxjs/toolkit'
// reducer
import users from './slices/users'
import guests from './slices/guests'

export default configureStore({
  reducer: {
    users,
    guests
  }
})
