import React, { useState } from 'react';
import StepOne from '../steps/StepOne';
import StepTwo from '../steps/StepTwo';
import { ISignUpState } from './SignupForm';

export interface StepProps {
    onChange: (e: any) => void;
    state:ISignUpState
}


const Switcher = ({ onChange }: StepProps) => {
    const [currentStep, setCurrentStep] = useState(1)

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    }

    const prevStep = () => {
        setCurrentStep(currentStep - 1)
    }

    const switchStep = (currentStep: any) => {
        switch (currentStep) {
            case 1:
                return (
                    <StepOne onChange={onChange} nextStep={nextStep}/>
                )
            case 2:
                return (
                    <StepTwo onChange={onChange} prevStep={prevStep}/>
                )
            default:
                return <></>
        }
    }

    return (
        <>{switchStep(currentStep)}</>
    )
}

export default Switcher