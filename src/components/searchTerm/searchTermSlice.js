import { createSlice } from "@reduxjs/toolkit";

export const searchTermSlice = createSlice({
    name: 'searchTerm',
    initialState: '',
    reducers: {
        updateSearchTerm: (state, action) => {
            return action.payload;
        },
    }
})


//selector 
export const selectSearchTerm = (state) => state.searchTerm;


//export actions and reducer
export const { updateSearchTerm } = searchTermSlice.actions;
export default searchTermSlice.reducer;