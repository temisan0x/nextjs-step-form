import React, { useEffect, useState } from 'react';
import classes from '../../../styles/index.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { formPrivacy, formStage } from '../../redux/slices/steps';

export interface StepProps {
    submitButtonText: string;
    prevButton?: boolean;
    nextButton?: boolean;
}

const StepTwo = ({ prevButton, submitButtonText }: StepProps) => {

    const dispatch = useDispatch()

    //grab state values from redux Steptype slice
    const currentStage = useSelector((state: RootState) => state.stepState.FormStage);//prevBtn
    const stateSignup1 = useSelector((state: RootState) => state.stepState.FormPrivacy.checkOne);
    const stateSignup2 = useSelector((state: RootState) => state.stepState.FormPrivacy.checkTwo);

    const state = useSelector(state => state);
    const stateOutput = (`JSON Data Form-Privacy: ${JSON.stringify(state, null, 2)}`)
    console.log(stateOutput);
    //toggle checkboxes onChange
    const [isChecked, setIsChecked] = useState(stateSignup1 || false);
    const [isChecked2, setisChecked2] = useState(stateSignup2 || false);

    function handleChange(e: any) {
        setIsChecked(!isChecked);
    }

    function handleChange2(e: any) {
        setisChecked2(!isChecked2);
    }

    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleFormSubmit(e: any): void {
        e.preventDefault();
        setIsSubmitted(true)
    }

    useEffect(() => {
        if (isSubmitted) {
            dispatch(formStage(3))
        } dispatch(
            formPrivacy({
                checkOne: isChecked, //update check box
                checkTwo: isChecked2,
            })
        )
    }, [isSubmitted, dispatch, isChecked2, isChecked])

    return (
        <form onSubmit={handleFormSubmit}>
            <div className={classes.formLayout}>
                <div>
                    <p>First Name</p>
                    <input
                        name="checkOne"
                        type="checkbox"
                        onChange={handleChange} />
                </div>

                <div>
                    <p>Last Name</p>
                    <input
                        name="checkTwo"
                        type="checkbox"
                        onChange={handleChange2} />
                </div>
            </div>
            <div className={classes.formBtn}>
                {(prevButton) &&
                    <p>
                        <input
                            type="submit"
                            value={`Click`}
                            className={classes.btn}
                            onClick={()=> dispatch(formStage(currentStage - 1))}
                        />
                    </p>}
                <p>
                    <input
                        type="submit"
                        value={`Next`}
                        className={classes.btn}
                    />
                </p>
            </div>
        </form>
    )
}


export default StepTwo