// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from 'axios';

// //create action
// export const createUser = createAsyncThunk("createUser", async (data, { rejectWithValue }) => {


//     try {
//         const response = await axios.post("https://6702dc39bd7c8c1ccd400b89.mockapi.io/reduxToolkit/users", data);
//         console.log(response);
//         return response.data;

//     } catch (error) {
//         return rejectWithValue(error);
//     }

// });

// export const readUser = createAsyncThunk("readUser", async (data, { rejectWithValue }) => {

//     try {
//         const response = await axios.get("https://6702dc39bd7c8c1ccd400b89.mockapi.io/reduxToolkit/users");
//         console.log(response);
//         return response.data;

//     } catch (error) {
//         return rejectWithValue(error);
//     }
// })

// export const userDetails = createSlice({
//     name: 'userDetail',
//     initialState: {
//         users: [],
//         loading: false,
//         err: null,
//     },
//     extraReducers: (builder) => {
//         builder.addCase(createUser.pending, (state) => {
//             state.loading = true;
//         }),
//             builder.addCase(createUser.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.users.push(action.payload);
//             }),
//             builder.addCase(createUser.rejected, (state, action) => {
//                 state.loading = false;
//                 state.users = action.payload;
//             }),
//             builder.addCase(readUser.pending, (state) => {
//                 state.loading = true;
//             }),
//             builder.addCase(readUser.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.users = action.payload;
//             }),
//             builder.addCase(readUser.rejected, (state, action) => {
//                 state.loading = false;
//                 state.users = action.payload;
//             })
//     }
// })


// export default userDetails.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

// Utility function to handle API requests
const handleApi = async (method, url, data = null) => {
    const options = { method, url };
    if (data) options.data = data;

    const response = await axios(options);
    return response.data;
};

// Create action for creating a user
export const createUser = createAsyncThunk("createUser", async (data, { rejectWithValue }) => {
    try {
        return await handleApi("POST", "https://6702dc39bd7c8c1ccd400b89.mockapi.io/reduxToolkit/users", data);
    } catch (error) {
        return rejectWithValue(error);
    }
});

// Create action for reading users
export const readUser = createAsyncThunk("readUser", async (_, { rejectWithValue }) => {
    try {
        return await handleApi("GET", "https://6702dc39bd7c8c1ccd400b89.mockapi.io/reduxToolkit/users");
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const deleteUser = createAsyncThunk("deleteUser", async (_, { rejectWithValue }) => {
    try {
        return await handleApi("DELETE", "https://6702dc39bd7c8c1ccd400b89.mockapi.io/reduxToolkit/users");
    } catch (error) {
        return rejectWithValue(error);
    }
});


// Generic case reducer to handle loading and error states
const handleAsyncActions = (builder, action, stateUpdater) => {
    builder
        .addCase(action.pending, (state) => {
            state.loading = true;
        })
        .addCase(action.fulfilled, (state, { payload }) => {
            state.loading = false;
            stateUpdater(state, payload);
        })
        .addCase(action.rejected, (state, { payload }) => {
            state.loading = false;
            state.err = payload;
        });
};

// User details slice
export const userDetails = createSlice({
    name: 'userDetail',
    initialState: {
        users: [],
        loading: false,
        err: null,
    },
    extraReducers: (builder) => {
        handleAsyncActions(builder, createUser, (state, payload) => {
            state.users.push(payload); // For createUser, push the new user
        });
        handleAsyncActions(builder, readUser, (state, payload) => {
            state.users = payload; // For readUser, replace the users array with fetched data
        });
        handleAsyncActions(builder, deleteUser, (state, payload) => {
            // state.users = payload; // For readUser, replace the users array with fetched data
        });
    }
});

export default userDetails.reducer;
