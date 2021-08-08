import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
    async ({email, password}) => fetch("http://localhost:3000/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            email: email,
            password: password,
          },
        }),
      })
        .then((results) => {
          if (results.ok) {
            setToken(results.headers.get("Authorization"));
            return results.json();
          } else {
            return results.text().then((text) => Promise.reject(text));
          }
        })
        .then((json) => console.dir(json))
        .catch((err) => console.error(err))
)


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

export const usersSelector = (state) => state.user


export default usersSlice.reducer