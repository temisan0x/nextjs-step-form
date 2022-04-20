import Head from 'next/head';
import React, { useState } from 'react';
import Authentication from '../../layouts/Authentication';
import classes from '../../styles/index.module.css'
import Reference from './Reference';
import Switcher from './Switcher';

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
                    <span className=" before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-neutral-50  relative header-size">
                        <span className="text-slate-900 relative">
                            NewTabb
                        </span>
                    </span>
                </div>
                <Reference onChange={onChange} state={ state}/>
                <Switcher onChange={onChange} state={ state}/>
            </div>

        </Authentication>
    )
}

export default SignupForm