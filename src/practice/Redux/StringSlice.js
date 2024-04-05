import { createSlice } from '@reduxjs/toolkit'

export const StringSlice = createSlice({
    name: 'string',
    initialState: {
        value: 'Hello World',
    },
    reducers: { 
        storeString: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { storeString } = StringSlice.actions

export default StringSlice.reducer