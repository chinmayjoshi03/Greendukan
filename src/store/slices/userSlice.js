import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        profile: {
            name: "User",
            email: "user@example.com",
            address: "123 Main St"
        },
        ecoScore: {
            grade: "B",
            streak: 7,
            plasticSaved: 2,
      co2Saved: 1.4,
      weeklyGoal: 85,
        },
    },
    reducers: {
        updateProfile: (state, action) => {
            state.profile = { ...state.profile, ...action.payload };
        },
        updateEcoScore: (state, action) => {
            state.ecoScore = { ...state.ecoScore, ...action.payload };
        }
    }
});

export const { updateProfile, updateEcoScore } = userSlice.actions;

export default userSlice.reducer;