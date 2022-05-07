import Head from "next/head";
import React, { useState } from "react";
import Authentication from "../../layouts/Authentication";
import classes from "../../../styles/index.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import StepOne from "../steps/StepOne";
import StepTwo from "../steps/StepTwo";
import StepThree from "../steps/StepThree";
import StepOutput from "../steps/StepOutput";
import LazyLoad from "react-lazyload"

const SignupForm = () => {
    const formStage = useSelector(
        (state: RootState) => state.stepState.FormStage
    );

    return (
        <Authentication>
            <Head>
                <title>Register new account</title>
                <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
            </Head>
            <div className={classes.signupForm}>
                {/* <Reference onChange={onChange} state={ state}/> */}
                <h1 className={classes.signup}>Sign Up</h1>
                <div className="progressbar">
                    <div
                        className={
                            formStage === 1
                                ? "progress-step progress-step-active"
                                : "progress-step"
                        }
                    ></div>
                    <div
                        className={
                            formStage === 2
                                ? "progress-step progress-step-active"
                                : "progress-step"
                        }
                    ></div>
                    <div
                        className={
                            formStage === 3
                                ? "progress-step progress-step-active"
                                : "progress-step"
                        }
                    ></div>
                    <div
                        className={
                            formStage === 4
                                ? "progress-step progress-step-active"
                                : "progress-step"
                        }
                    ></div>
                </div>
                {/* <Switcher onChange={onChange} state={state} /> */}
                {formStage === 1 && (
                    <LazyLoad>
                        <StepOne submitButtonText={"Next"} prevButton={false} />
                    </LazyLoad>
                )}
                {formStage === 2 && (
                    <LazyLoad>
                        <StepTwo submitButtonText={"Next"} prevButton={true} />
                    </LazyLoad>
                )}
                {formStage === 3 && (
                    <LazyLoad>
                        <StepThree submitButtonText={"Next"} prevButton={true} />
                    </LazyLoad>
                )}
                {formStage === 4 && <StepOutput successMessage={"Thank you, please check your email!"} />}
            </div>
        </Authentication>
    );
};

export default SignupForm;
