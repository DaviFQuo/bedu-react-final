import { createSlice } from '@reduxjs/toolkit'

export const stationSlice = createSlice({
  name: 'stationState',
  initialState: {
      url: '',
      name: '',
      homepage: '',
      tags: [],
      urlResolved: '',
      favicon: ''
  },
  reducers: {
    updateStation: (state, action) => {
        let stationPayload = JSON.parse(action.payload);

        state.url = stationPayload.url;
        state.name = stationPayload.name;
        state.homepage = stationPayload.homepage;
        state.tags = stationPayload.tags;
        state.urlResolved = stationPayload.url_Resolved;
        state.favicon = stationPayload.favicon;
    }
  }
})

// Action creators are generated for each case reducer function
export const { updateStation } = stationSlice.actions

export default stationSlice.reducer