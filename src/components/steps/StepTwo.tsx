import React, { useEffect, useState } from 'react';
import classes from '../../../styles/index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { formPrivacy, formSignup, formStage } from '../../redux/slices/steps';

export interface StepProps {
    submitButtonText: string;
    prevButton?: boolean;
    nextButton?: boolean;
}

const StepTwo = ({ prevButton, submitButtonText }: StepProps) => {

    const dispatch = useDispatch()

    //grab state values from redux Steptype slice
    const currentStage = useSelector((state: RootState) => state.stepState.FormStage);//prevBtn
    const formGender = useSelector((state: RootState) => state.stepState.FormSignup.gender);
    const formDOB = useSelector((state: RootState) => state.stepState.FormSignup.dob);
    const formState = useSelector((state: RootState) => state.stepState.FormSignup.state);
    const formPassword = useSelector((state: RootState) => state.stepState.FormSignup.password);

    const state = useSelector(state => state);
    const stateOutput = (`JSON Data Form-Privacy: ${JSON.stringify(state, null, 2)}`)
    console.log(stateOutput);

    const [formData, setFormData] = useState({
        dob: formDOB || "",
        gender: formGender || "",
        state: formState || "",
        password: formPassword || ""
    })

    function handleChanges(e: any) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    //validate form 
    const [errors, setErrors] = useState({});
    const validate = (formData: any) => {
        let formErrors = {}

        //dob
        const dateRegex = new RegExp("/^[0-9]{2}[\/][0-9]{2}[\/][0-9]{4}$/g")
        if (!formData.dob || !dateRegex.test(formData.dob)) {
            formErrors.dob = "must not be below 17 years of age"
        }

        //gender
        if (!formData.gender) {
            formErrors.gender = "kindly specify your gender";
        }

        //state
        if (formData.state) {
            formErrors.state = "your state is required";
        }

        //password
        const passwordRegex = new RegExp('(?=.*[a-z])+(?=.*[A-Z])+(?=.*[0-9])+(?=.{10,})')
        if (!formData.password || !passwordRegex.test(formData.password)) {
            formErrors.password = "(Min. 10 characters, 1 number, case-sensitive)"
        }
        return formErrors
    }

    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleFormSubmit(e: any): void {
        e.preventDefault();
        setIsSubmitted(true);
        setErrors(validate(formData))
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitted) {
            dispatch(formStage(3))
        } dispatch(
            formSignup({
                dob: formData.dob,
                gender: formData.gender,
                state: formData.state,
                password: formData.password
            }))
    }, [isSubmitted, errors, dispatch, formData])

    return (
        <form onSubmit={handleFormSubmit}>
            <div className={classes.formSec}>
                <div className={classes.formLayout2}>
                    <p>Gender ?</p>
                    <label>
                        <div className={classes.gender}>
                            <p> Male</p>
                            <input
                                id="cbx"
                                type="checkbox"
                                name="gender"
                                value="male"
                                checked={formData.gender === "male"}
                                onChange={handleChanges} /> {" "}
                        </div>
                        <div className={classes.gender}>
                            <p>Female</p>
                            <input
                                id="cbx"
                                type="checkbox"
                                name="gender"
                                value="female"
                                checked={formData.gender === "female"}
                                onChange={handleChanges} />{" "}
                        </div>
                    </label>
                    {errors.gender && <span className={classes.errorHandler}>{errors.gender}</span>}
                </div>

                <div className={classes.formLayout2}>
                    <p>Date Of Birth</p>
                    <input
                        name="dob"
                        type="date"
                        value={formData.dob}
                        onChange={handleChanges}
                        className={classes.date}
                    />
                    {errors.dob && <span className={classes.errorHandler}>{errors.dob}</span>}
                </div>
            </div>

            <div className={classes.formLayout}>
                <div>
                    <p>Password</p>
                    <input type="password" name="password" className={classes.password} value={formData.password} onChange={handleChanges} />
                    {errors.password && <span className={classes.errorHandler}>{errors.password}</span>}
                </div>
            </div>

            <div className={classes.formBtn}>
                {(prevButton) &&
                    <p>
                        <input
                            type="submit"
                            value={`Previous`}
                            className={classes.btn}
                            onClick={() => dispatch(formStage(currentStage - 1))}
                        />
                    </p>}
                <p>
                    <input
                        type="submit"
                        value={submitButtonText || `Next`}
                        className={classes.btn}
                    />
                </p>
            </div>
        </form>
    )
}


export default StepTwo