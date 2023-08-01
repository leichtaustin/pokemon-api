import { createSlice } from "@reduxjs/toolkit";

export const teamListSlice = createSlice ({
    name: 'teamList',
    initialState: [],
    reducers: {
        addTeamMember: (state, action) => {
            return [...state, action.payload]
        }
    }
})

//selectors

export const selectTeamList = (state) => state.teamList;

//export actions and reducer

export const { addTeamMember } = teamListSlice.actions;
export default teamListSlice.reducer;