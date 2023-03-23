import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiStatus, defaultList, IUserState } from "./User.type";
import { getUserList } from "./UserService";

const initialState: IUserState = {
    list: defaultList,
    listStatus: ApiStatus.ideal
};

export const getUserListAction = createAsyncThunk("user/getUserListAction", async () => {
    const userList = await getUserList();
    return userList.data;
});

const userSlice = createSlice({
    name: "userReducer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUserListAction.pending, (state) => {
            state.listStatus = ApiStatus.loading;
        }),
            builder.addCase(getUserListAction.fulfilled, (state, action) => {
                state.listStatus = ApiStatus.ideal;
                state.list = action.payload
            }),
            builder.addCase(getUserListAction.rejected, (state) => {
                state.listStatus = ApiStatus.error;
            }),
    },
});

export default userSlice.reducer;