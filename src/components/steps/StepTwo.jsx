import React, { useEffect, useState } from 'react';
import classes from '../../../styles/index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {formSignup2, formStage } from '../../redux/slices/steps';
import Image from 'next/image';
import Lock from '../../assets/lock.png'
import UnLock from '../../assets/unlocked.png'

const StepTwo = ({ prevButton, submitButtonText }) => {
    const dispatch = useDispatch();

    //grab state values from redux Steptype slice
    const currentStage = useSelector((state) => state.stepState.FormStage);//prevBtn
    const formState = useSelector((state) => state.stepState.FormSignup2.state);
    const formCountry = useSelector((state) => state.stepState.FormSignup2.country);
    const formGender = useSelector((state) => state.stepState.FormSignup2.gender);
    const formPassword = useSelector((state) => state.stepState.FormSignup2.password);
    const formOccupation = useSelector((state) => state.stepState.FormSignup2.occupation);

    const [toggle, setToggle] = useState(false)
    const state = useSelector(state => state);
    const stateOutput = (`JSON Data Form-Data: ${JSON.stringify(state, null, 2)}`)
    console.log(stateOutput);

    //FormData state
    const [formData, setFormData] = useState({
        gender: formGender || false,
        state: formState || "",
        country: formCountry || "",
        occupation: formOccupation || "",
        password: formPassword || "",
    })

    function handleChanges(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    //password click
    function handleClick() {
        setToggle(!toggle)
        console.log('clicked');
        
    }

    //validate form 
    const [errors, setErrors] = useState({});
    const validate = (formData) => {
        let formErrors= {}

        //gender
        if (!formData.gender) {
            formErrors.gender = "kindly specify your gender";
        }

        //state
        if (!formData.state) {
            formErrors.state = "your state is required";
        }

        //country
        if (!formData.country) {
            formErrors.country = "your country is required";
        }

        //occupation
        if (!formData.occupation) {
            formErrors.occupation = "your occupation is required";
        }

        //password
        const passwordRegex = new RegExp('(?=.*[a-z])+(?=.*[A-Z])+(?=.*[0-9])+(?=.{10,})')
        if (!formData.password || !passwordRegex.test(formData.password)) {
            formErrors.password = "(Min. 10 characters, 1 number, case-sensitive)"
        }

        return formErrors;
    }

    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleFormSubmit(e) {
        e.preventDefault();
        setIsSubmitted(true);
        setErrors(validate(formData))
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitted) {
            dispatch(formStage(3))
        } dispatch(
            formSignup2({
                gender: formData.gender,
                state: formData.state,
                country: formData.country,
                password: formData.password,
                occupation: formData.occupation
            }))
    }, [isSubmitted, errors, dispatch, formData, stateOutput])

    return (
        <form onSubmit={handleFormSubmit}>
            <div className={classes.genderS}>
                <p>Gender</p>
                <label htmlFor="gender" className="cbx">
                    <div className={classes.gender}>
                        <p>Female</p>
                        <input
                            id="cbx"
                            type="checkbox"
                            name="gender"
                            value="female"
                            checked={formData.gender === "female"}
                            onChange={handleChanges} /> {" "}
                    </div>
                    <div className={classes.gender}>
                        <p>Male</p>
                        <input
                            id="cbx"
                            type="checkbox"
                            name="gender"
                            value="male"
                            checked={formData.gender === "male"}
                            onChange={handleChanges} />{" "}
                    </div>
                </label>
                {errors.gender && <span className={classes.errorHandler}>{errors.gender}</span>}
            </div>
            <div className={classes.formLayout}>

                <div>
                    <p>Occupation</p>
                    <input type="text" name="occupation" value={formData.occupation} onChange={handleChanges} />
                    {errors.occupation && <span className={classes.errorHandler}>{errors.occupation}</span>}
                </div>

                <div>
                    <p>State</p>
                    <input type="text" name="state" value={formData.state} onChange={handleChanges} />
                    {errors.state && <span className={classes.errorHandler}>{errors.state}</span>}
                </div>


            </div>
            <div className={classes.formLayout}>

                <div>
                    <p>Country</p>
                    <input type="text" name="country" value={formData.country} onChange={handleChanges} />
                    {errors.country && <span className={classes.errorHandler}>{errors.country}</span>}
                </div>

                <div>
                    <p>Password</p>
                    <div className={classes.password} onClick={handleClick}>
                        <input className={classes.passwordInput}
                            type={toggle ? "password" : "text"}
                            name="password"
                            value={formData.password}
                            onChange={handleChanges} />
                        {
                            toggle ? <div className={classes.icon}>
                            <Image src={Lock} alt="lock" />
                        </div> : <div className={classes.icon}>
                            <Image src={UnLock} alt="lock" />
                        </div>
                        }
                    </div>
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

export default StepTwo;