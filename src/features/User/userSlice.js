import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";


export function setToken(token) {
    localStorage.setItem("token", token);
    localStorage.setItem("lastLoginTime", new Date(Date.now()).getTime());
}

export function getToken() {
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
    if (response.ok) {
      setToken(response.headers.get("Authorization"));
      return data;
    } else {
      return thunkAPI.rejectWithValue(data);
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
      if (response.ok) {
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
    status: 'idle',
    logoutUserStatus: 'idle',
    loginUserStatus: 'idle',

    authChecked: false,
    loggedIn: false,
    message: null,
    currentUser: {},
    admin: false
    
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
      clearState: (state) => {
        state.status = 'idle'
        
      },
      clearLoginUserStatus: (state) => {
        state.loginUserStatus = 'idle'
      },
      clearLogoutUserStatus: (state) => {
        state.logoutUserStatus = 'idle'
      },

    },

    extraReducers: {
      // Sign Up
      [signupUser.pending]: (state) => {
        state.status = "loading"
      },
      [signupUser.fulfilled]: (state, { payload }) => {
        
        state.status = "complete"
        
        state.authChecked = true
        state.loggedIn = true
        state.currentUser = payload.data.data

        if (state.currentUser.role === "admin") {
          state.admin = true
        }
      },


      [signupUser.rejected]: (state, { payload }) => {
        
        state.loginUserStatus= "rejected"

        state.authChecked = true
        state.loggedIn = false
        state.message = payload.status.message;
      },

      // Login
      [loginUser.pending]: (state) => {
        state.loginUserStatus = "loading"
      },
      [loginUser.fulfilled]: (state, { payload }) => {

        state.loginUserStatus = "complete"

        state.authChecked = true
        state.loggedIn = true
        state.currentUser = payload.data.data
        
        if (payload.data.data.attributes.role === "admin") {
          state.admin = true
        }
      },
      

      [loginUser.rejected]: (state, { payload }) => {
        state.loginUserStatus= "rejected"

        state.authChecked = true
        state.loggedIn = false
        state.message = payload.error
      },

      // Logout
      [logoutUser.pending]: (state) => {
        state.logoutUserStatus = "loading"
      },

      [logoutUser.fulfilled]: (state) => {
       
        state.logoutUserStatus = "complete"
        state.authChecked = false
        state.loggedIn = false
        
        state.currentUser = {}
        state.admin = false
        localStorage.removeItem('token')
        
      },
      

      [logoutUser.rejected]: (state, { payload }) => {
        
        state.logoutUserStatus = "rejected"

        state.authChecked = true
        state.loggedIn = false
        state.admin = false
        
      },

      [checkAuth.pending]: (state) => {
        state.status = "loading"
      },

      [checkAuth.fulfilled]: (state, { payload }) => {

        state.status = "complete"

        state.authChecked = true
        state.loggedIn = true
        
        state.currentUser = payload.data
        
        if (payload.data.attributes.role === "admin") {
          state.admin = true
        }
      },
      

      [checkAuth.rejected]: (state, { payload }) => {
        
        state.status= "rejected"

        state.authChecked = true
        state.loggedIn = false
        state.admin = false
        // state.message = payload.error
      },

    }
})

export const {clearState, clearLogoutUserStatus, clearLoginUserStatus} = userSlice.actions

export const userSelector = (state) => state.user

export default userSlice.reducer