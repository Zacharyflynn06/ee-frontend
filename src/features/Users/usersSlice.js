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
  async ({email, password}, thunkAPI) => {
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
            user: {
              email,
              password
            }
          }),
        }
      );
      let data = await response.json();
      console.log('data', data);

      if (response.ok) {
        setToken(response.headers.get("Authorization"));
        return { ...data };
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
            email,
            password,
          }),
        }
      );
      let data = await response.json();
      console.log('response', data);
      if (response.ok) {
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


const initialState = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
    
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
      clearState: (state) => {
        state.isError = false;
        state.isSuccess = false;
        state.isFetching = false;
  
        return state
      },
    }
})

export const {clearState} = usersSlice.actions

export const usersSelector = (state) => state.user


export default usersSlice.reducer