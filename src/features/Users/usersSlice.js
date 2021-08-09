import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

function setToken(token) {
    localStorage.setItem("token", token);
    localStorage.setItem("lastLoginTime", new Date(Date.now()).getTime());
}

// function getToken() {
//     let now = new Date(Date.now()).getTime();
//     let thirtyMinutes = 1000 * 60 * 30;
//     let timeSinceLastLogin = now - localStorage.getItem("lastLoginTime");
//     if (timeSinceLastLogin < thirtyMinutes) {
//       return localStorage.getItem("token");
//     }
//   }

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
              password,
            }
          }),
        }
      );
      let data = await response.json();
      console.log('data', data);

      if (response.ok) {
        setToken(response.headers.get("Authorization"));
        return { ...data, email: email };
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log('Error', e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);




const initialState = {
    authChecked: false,
    loggedIn: false,
    currentUser: {},
    cart:[]
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        authenticated: (state, action) => {
            state = {
                authChecked: true,
                loggedIn: true,
                currentUser: action.payload
            }
        },

        not_authenticated: (state) => {
            state = {
                authChecked: true,
                loggedIn: false,
                currentUser: {}
            }
        }


    }
})

export const {authenticated, not_authenticated} = usersSlice.actions

export const usersSelector = (state) => state.user


export default usersSlice.reducer