import { createSlice } from "@reduxjs/toolkit";

export interface StepType {
    step: number,
}

const initialState: StepType = {
    step: 0
}

const stepSlice = createSlice({
    name: "stepState",
    initialState,
    reducers: {
        nextStep: (state) => {
            state.step += 1
        },
        prevStep: (state) => {
            state.step -=1
        },
        resetStep: (state) => {
            state.step = 0;
        }
    }
})

export const {nextStep, prevStep, resetStep} = stepSlice.actions