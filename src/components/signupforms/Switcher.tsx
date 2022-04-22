import React, { useState } from 'react';
import StepOne from '../steps/StepOne';
import StepTwo from '../steps/StepTwo';
import { ISignUpState } from './SignupForm';
import { useSelector } from 'react-redux';
import { selectAllSteps } from '../../redux/slices/steps';

export interface StepProps {
    onChange: (e: any) => void;
    state:ISignUpState
}


const Switcher = ({ onChange, state }: StepProps) => {
    const {step} = useSelector(selectAllSteps)

    const switchStep = () => {
        switch (step) {
            case 0:
                return (
                    <StepOne onChange={onChange} state={ state}/>
                )
            case 1:
                return (
                    <StepTwo onChange={onChange} state={state}/>
                )
            default:
                return <></>
        }
    }

    return (
        <>{switchStep()}</>
    )
}

export default Switcher