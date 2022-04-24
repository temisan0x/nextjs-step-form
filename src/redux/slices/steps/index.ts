import { createSlice } from "@reduxjs/toolkit";
import { RootState } from '../../store';

export interface StepType {
    FormStage: number
    FormSignup: any
    FormPrivacy: string
}

const initialState: StepType = {
    FormStage: 1,
    FormSignup: "",
    FormPrivacy: ""
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
        formPrivacy: (state, action) => {
            state.FormPrivacy = action.payload
        }
    }
})

export const { formStage, formSignup, formPrivacy } = stepSlice.actions;
export const selectAllSteps = (state: RootState) => state.stepState
export default stepSlice.reducer