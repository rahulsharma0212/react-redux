import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "alice alan" },
  { id: "1", name: "Parneeta " },
  { id: "2", name: "Vikal" },
];

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
