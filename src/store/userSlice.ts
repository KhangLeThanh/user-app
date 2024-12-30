import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserDetail, Cart } from "../types/types";
import axios from "axios";

type UserState = Readonly<{
  users: UserDetail[];
  carts: Cart[];
  history: number[];
}>;

const initialState: UserState = {
  users: [],
  carts: [],
  history: [],
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const response = await axios.get(
    "https://dummyjson.com/users?limit=10&skip=0"
  );
  return response.data.users; // Fetch all users from the endpoint
});

export const fetchCartDetails = createAsyncThunk(
  "user/fetchCartDetails",
  async (userId: number) => {
    const response = await axios.get(
      `https://dummyjson.com/users/${userId}/carts`
    );
    // Return an empty cart if no carts are found
    return response.data.carts.length > 0
      ? response.data.carts[0]
      : { userId, totalProducts: 0, totalQuantity: 0, total: 0 };
  }
);

// Create slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setHistory(state, action) {
      const userId = action.payload;
      if (!state.history.includes(userId)) {
        state.history.push(userId);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload; // Store users directly as an array
      })

      .addCase(fetchCartDetails.fulfilled, (state, action) => {
        const cart = action.payload;
        if (cart) {
          state.carts[cart.userId] = cart;
        }
      });
  },
});

export const { setHistory } = userSlice.actions;

export default userSlice.reducer;
