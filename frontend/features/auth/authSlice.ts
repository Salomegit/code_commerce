import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login,logout } from '../../endpoints/auth/auth';

export const loginUser = createAsyncThunk<
  { user: any; token: string },
  { username: string; password: string },
  { rejectValue: string }
>(
  'auth/login',
  async (credentials: { username: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await login(credentials);
      return response; // Should contain user data
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || 'Login failed'
      );
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    // token: localStorage.getItem('token') || null,
    isLoading: false,
    isAuthenticated: false,
    error: null,
  },
  reducers: {
    // Regular synchronous actions
    // logout: (state) => {
    //   state.user = null;
    //   state.token = null;
    //   state.isAuthenticated = false;
    //   localStorage.removeItem('token');
    // },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Handle async action states
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Login failed';
      });
  },
});

export const {  clearError } = authSlice.actions;
export default authSlice.reducer;

// export const logoutUser = createAsyncThunk(
//   'auth/logout',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(AUTH_URLS.LOGOUT, {}, { 
//         withCredentials: true 
//       });
//       return response.data;
//     } catch (error: any) {
//       return rejectWithValue(error.response?.data?.message || 'Logout failed');
//     }
//   }
// );