import Head from 'next/head';
import React, { useState } from 'react';
import Authentication from '../../layouts/Authentication';
import classes from '../../../styles/index.module.css'
import Reference from './Reference';
import Switcher from './Switcher';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export interface ISignUpState {
    firstName: string;
    lastName: string;
    DOB: string;
    email: string;
    telephone: string;
    file: string;
    message: string;
    agreedToTerms: boolean
}

const SignupForm = () => {

    const formStage = useSelector((state: RootState) => state.stepState.formStage)

    const [state, setState] = useState<ISignUpState>({
        firstName: '',
        lastName: '',
        DOB: '',
        email: '',
        telephone: '',
        file: '',
        message: '',
        agreedToTerms: true,
    })

    const onChange = (e: any) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

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
                <Switcher onChange={onChange} state={state} />
            </div>

        </Authentication>
    )
}

export default SignupForm