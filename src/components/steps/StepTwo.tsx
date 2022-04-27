import React, { useEffect, useState } from 'react';
import classes from '../../../styles/index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { formPrivacy, formSignup, formStage } from '../../redux/slices/steps';

export interface StepProps {
    prevButton: boolean;
    nextButton: boolean;
    submitButtonText: string;
}

const StepTwo = ({ prevButton, nextButton, submitButtonText }: StepProps) => {
    const dispatch = useDispatch();

    //grab state values from redux Steptype slice
    const currentStage = useSelector((state: RootState) => state.stepState.FormStage);//prevBtn
    const formState = useSelector((state: RootState) => state.stepState.FormSignup.state);
    const formCountry = useSelector((state: RootState) => state.stepState.FormSignup.country);
    const formGender = useSelector((state: RootState) => state.stepState.FormSignup.gender);
    const formPassword = useSelector((state: RootState) => state.stepState.FormSignup.password);

    const state = useSelector(state => state);
    const stateOutput = (`JSON Data Form-Privacy: ${JSON.stringify(state, null, 2)}`)
    console.log(stateOutput);

    //FormData state
    const [formData, setFormData] = useState({
        gender: formGender || "",
        state: formState || "",
        country: formCountry || "",
        password: formPassword || "",
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

        //gender
        if (!formData.gender) {
            formErrors.gender = "kindly specify your gender";
        }

        //state
        if (formData.state) {
            formErrors.state = "your state is required";
        }

        //country
        if (formData.country) {
            formErrors.country = "your country is required";;
        }

        //password
        const passwordRegex = new RegExp('(?=.*[a-z])+(?=.*[A-Z])+(?=.*[0-9])+(?=.{10,})')
        if (!formData.password || !passwordRegex.test(formData.password)) {
            formErrors.password = "(Min. 10 characters, 1 number, case-sensitive)"
        }

        return formErrors;
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
                gender: formData.gender,
                state: formData.state,
                country: formData.country,
                password: formData.password
            }))
    }, [isSubmitted, errors, dispatch, formData])

    return (
        <form onSubmit={handleFormSubmit}>
            
        </form>
    )

}