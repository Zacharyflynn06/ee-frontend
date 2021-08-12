import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

function setToken(token) {
    localStorage.setItem("token", token);
    localStorage.setItem("lastLoginTime", new Date(Date.now()).getTime());
}

function getToken() {
    let now = new Date(Date.now()).getTime();
    let thirtyMinutes = 1000 * 60 * 30;
    let timeSinceLastLogin = now - localStorage.getItem("lastLoginTime");
    if (timeSinceLastLogin < thirtyMinutes) {
      return localStorage.getItem("token");
    }
}

export const signupUser = createAsyncThunk(
  'users/signupUser',
  async (userData, thunkAPI) => {
    try {
      const response = await fetch(
        "http://localhost:3001/signup",
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user: userData
          }),
        }
      );
      let data = await response.json();
      console.log('data', data);

      if (response.ok) {
        setToken(response.headers.get("Authorization"));
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (event) {
      console.log('Error', event.response.data);
      return thunkAPI.rejectWithValue(event.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  'users/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await fetch(
        "http://localhost:3001/login",
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user: {
              email,
              password,
            }
          }),
        }
      );
      let data = await response.json();
      console.log('response', data);
      if (response.ok) {
        console.log(response.headers.get("Authorization"))
        setToken(response.headers.get("Authorization"));
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (event) {
      console.log('Error', event.response.data);
      thunkAPI.rejectWithValue(event.response.data);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'user/logout',
  async (thunkAPI) => {
    try {
      const response = fetch(
        "http://localhost:3001/logout", {
          
          method: "DELETE",
          headers: {
            Accept: "application/json",
            Authorization: getToken()
          }
          
        }
      )
        console.log(response)
      
      // let data = await response.json()
      // console.log('response', data)
      if (response.status === 200) {
        debugger

      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (event) {
      console.log('Error', event.response.data);
      thunkAPI.rejectWithValue(event.response.data);
    }
  }
)


const initialState = {
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
    currentUser: {}
    
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
      clearState: (state) => {
        state.isError = false;
        state.isSuccess = false;
        state.isFetching = false;
        return state
      },
    },

    extraReducers: {
      // Sign Up
      [signupUser.fulfilled]: (state, { payload }) => {
        
        console.log('payload', payload);
        state.isFetching = false;
        state.isSuccess = true;
        state.currentUser = payload.data.data
      },

      [signupUser.pending]: (state) => {
        state.isFetching = true;
      },

      [signupUser.rejected]: (state, { payload }) => {
        
        state.isFetching = false;
        state.isError = true;
        state.errorMessage = payload.status.message;
      },

      // Login
      [loginUser.fulfilled]: (state, { payload }) => {

        console.log('payload', payload);
        state.isFetching = false;
        state.isSuccess = true;
        debugger
        state.currentUser = payload.data.data
        return state;
      },
      
      [loginUser.pending]: (state) => {
        state.isFetching = true;
      },

      [loginUser.rejected]: (state, { payload }) => {
        debugger
        console.log('payload', payload);
        state.isFetching = false;
        state.isError = true;
        state.errorMessage = payload.error
      },

      // Logout
      [logoutUser.fulfilled]: (state, { payload }) => {

        console.log('payload', payload);
        state.isFetching = false;
        state.isSuccess = true;
        state.currentUser = {}
        localStorage.removeItem('token')
        return state;
      },
      
      [logoutUser.pending]: (state) => {
        state.isFetching = true;
      },

      [logoutUser.rejected]: (state, { payload }) => {
        
        state.isFetching = false;
        state.isError = true;
        // state.errorMessage = payload.error
      },

    }
})

export const {clearState} = userSlice.actions

export const userSelector = (state) => state.user

export default userSlice.reducer