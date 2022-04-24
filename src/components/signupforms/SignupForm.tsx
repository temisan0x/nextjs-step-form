import Head from 'next/head';
import React, { useState } from 'react';
import Authentication from '../../layouts/Authentication';
import classes from '../../../styles/index.module.css'
import Reference from './Reference';
import Switcher from './Switcher';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import StepOne from '../steps/StepOne';

export interface StepProps {
    submitButtonText: string;
    prevButton: boolean;
    nextButton?:()=> void;
}

const SignupForm = ({submitButtonText, prevButton, nextButton}:StepProps) => {

    const formStage = useSelector((state: RootState) => state.stepState.FormStage)

    return (
        <Authentication>
            <Head>
                <title>Register new account</title>
                <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
            </Head>
            <div className={classes.signupForm}>
                <div className={classes.header}>
                    <h1>NewTabb&#43;</h1>
                </div>
                {/* <Reference onChange={onChange} state={ state}/> */}
                <div className="progressbar">
                    <div className={formStage === 1 ? "progress-step progress-step-active" : "progress-step"}></div>
                    <div className={formStage === 2 ? "progress-step progress-step-active" : "progress-step"}></div>
                    <div className={formStage === 3 ? "progress-step progress-step-active" : "progress-step"}></div>
                </div>
                {/* <Switcher onChange={onChange} state={state} /> */}
                {(formStage === 1) && <StepOne submitButtonText={submitButtonText} prevButton={false} />}
                {(formStage === 2) && <div>wteye</div>}
                {(formStage === 3) && <div>kdkd</div>}
            </div>

        </Authentication>
    )
}

export default SignupForm