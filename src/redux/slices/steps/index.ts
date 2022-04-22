import { createSlice } from "@reduxjs/toolkit";
import { RootState } from '../../store';

export interface StepType {
    formStage: number
    formSignup: string
    formPrivacy: string
}

const initialState: StepType = {
    formStage: 1,
    formSignup: "",
    formPrivacy: ""
}

const stepSlice = createSlice({
    name: "stepState",
    initialState,
    reducers: {
        formStage: (state, action) => {
            state.formStage = action.payload
        },
        formSignup: (state, action) => {
            state.formSignup = action.payload
        },
        formPrivacy: (state, action) => {
            state.formPrivacy = action.payload
        }
    }
})

export const { formStage, formSignup, formPrivacy } = stepSlice.actions;
export const selectAllSteps = (state: RootState) => state.stepState
export default stepSlice.reducer