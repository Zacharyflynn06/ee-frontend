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
    }
);

export const logoutUser = createAsyncThunk(
  'users/logout',
  async (thunkAPI) => {
      const response = await fetch(
        "http://localhost:3001/logout", {
          
          method: "DELETE",
          headers: {
            Accept: "application/json",
            Authorization: getToken()
          }
          
        }
      )
      
      let data = await response.json()
      console.log('data', data)

      if (response.status === 200) {
        return data
      } else {
        return thunkAPI.rejectWithValue();
      }

  }
)

export const checkAuth = createAsyncThunk(
  'users/checkAuth',
  async(thunkAPI) => {
    const response = await fetch(
      "http://localhost:3001/current_user", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: getToken()
        }
      }
    )
    let data = await response.json()
    if(response.ok) {
      return data
    } else {
      return thunkAPI.rejectWithValue(data)
    }
  }
)


const initialState = {
    isFetching: false,
    isSuccess: false,
    isError: false,
    authChecked: false,
    loggedIn: false,
    message: '',
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
      [signupUser.pending]: (state) => {
        state.isFetching = true;
      },
      [signupUser.fulfilled]: (state, { payload }) => {
        
        console.log('payload', payload);
        state.isFetching = false;
        state.isSuccess = true;
        
        state.authChecked = true
        state.loggedIn = true
        state.currentUser = payload.data.data
      },


      [signupUser.rejected]: (state, { payload }) => {
        
        state.isFetching = false;
        state.isError = true;

        state.authChecked = true
        state.loggedIn = false
        state.message = payload.status.message;
      },

      // Login
      [loginUser.pending]: (state) => {
        state.isFetching = true;
      },
      [loginUser.fulfilled]: (state, { payload }) => {

        console.log('payload', payload);
        state.isFetching = false;
        state.isSuccess = true;

        state.authChecked = true
        state.loggedIn = true
        state.currentUser = payload.data.data
      },
      

      [loginUser.rejected]: (state, { payload }) => {
        debugger
        console.log('payload', payload);
        state.isFetching = false;
        state.isError = true;

        state.authChecked = true
        state.loggedIn = false
        state.message = payload.error
      },

      // Logout
      [logoutUser.pending]: (state) => {
        state.isFetching = true;
      },

      [logoutUser.fulfilled]: (state, { payload }) => {
        
        state.isFetching = false;
        state.isSuccess = true;

        state.authChecked = false
        state.loggedIn = false
        state.message = payload.message
        state.currentUser = {}
        localStorage.removeItem('token')
      },
      

      [logoutUser.rejected]: (state, { payload }) => {
        
        state.isFetching = false;
        state.isError = true;

        state.authChecked = true
        state.loggedIn = false
        
      },
      [checkAuth.pending]: (state) => {
        state.isFetching = true;
      },

      [checkAuth.fulfilled]: (state, { payload }) => {

        console.log('payload', payload);
        state.isFetching = false;
        state.isSuccess = true;

        state.authChecked = true
        state.loggedIn = false
        state.currentUser = {}
        localStorage.removeItem('token')
      },
      

      [checkAuth.rejected]: (state, { payload }) => {
        
        state.isFetching = false;
        state.isError = true;

        state.authChecked = true
        state.loggedIn = false
        state.message = payload.error
      },

    }
})

export const {clearState} = userSlice.actions

export const userSelector = (state) => state.user

export default userSlice.reducer