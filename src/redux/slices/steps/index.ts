import { createSlice } from "@reduxjs/toolkit";
import { RootState } from '../../store';

export interface StepType {
    FormStage: number
    FormSignup: any
    FormSignup2: any
    FormPrivacy: boolean
}

const initialState: StepType = {
    FormStage: 1,
    FormSignup: "",
    FormSignup2: "",
    FormPrivacy: false
}

const stepSlice = createSlice({
    name: "stepState",
    initialState,
    reducers: {
        formStage: (state, action) => {
            state.FormStage = action.payload
        },
        formSignup: (state, action) => {
            state.FormSignup = action.payload
        }, 
        formSignup2: (state, action) => {
            state.FormSignup2 = action.payload
        },
        formPrivacy: (state, action) => {
            state.FormPrivacy = action.payload
        }
    }
})

export const { formStage, formSignup, formSignup2, formPrivacy } = stepSlice.actions;
export const selectAllSteps = (state: RootState) => state.stepState
export default stepSlice.reducer