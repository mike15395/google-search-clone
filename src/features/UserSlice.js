import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: null
    },
    reducers: {
        addUsers: (state, action)=>{
            state = action.payload;
            return state;
        }
    }
});

export const { addUsers } = userSlice.actions; 

export const selectUser = (state) => state.user.data;

export default userSlice.reducer;
