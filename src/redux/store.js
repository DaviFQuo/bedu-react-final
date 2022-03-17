import { configureStore } from '@reduxjs/toolkit'
import stationReducer from './stationSlice'

export default configureStore({
  reducer: { stationState: stationReducer }
})