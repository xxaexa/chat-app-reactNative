// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { FormValues } from "../../../types";

// // Define the User interface
// interface User {
//   id: number;
//   username: string;
//   email: string;
//   // Add other necessary properties
// }

// // Define the AuthState interface
// interface AuthState {
//   user: any; // Tipe data disetel menjadi any untuk menangani berbagai struktur data
//   isLoading: boolean;
// }

// const initialState: AuthState = {
//   user: null,
//   isLoading: true,
// };

// const authSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     loginUser: (state: AuthState, action: PayloadAction<any>) => {
//       state.user = action.payload;
//     },
//     logoutUser: (state: AuthState) => {
//       state.user = [];
//     },
//   },
// });

// export const { logoutUser, loginUser } = authSlice.actions;
// export default authSlice.reducer;
