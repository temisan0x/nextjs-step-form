import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from '../../../styles/index.module.css';
import { formPrivacy, formStage } from '../../redux/slices/steps';
import { RootState } from '../../redux/store';
import { StepProps } from './StepTwo';

const StepThree = ({ submitButtonText, prevButton }: StepProps) => {

    const dispatch = useDispatch();

    //Redux store values for formUserPrivacy
    const currentStage = useSelector((state: RootState) => state.stepState.FormStage);
    const stateSignup1 = useSelector((state: RootState) => state.stepState.FormPrivacy.signup1);
    const stateSignup2 = useSelector((state: RootState) => state.stepState.FormPrivacy.signup2);

    const state = useSelector((state: RootState) => state)
    const stateOutput = (`JSON Data Form-Privacy: ${JSON.stringify(state, null, 2)}`)

    //toggle checkboxes 
    const [isChecked, setIsChecked] = useState(stateSignup1 || false);
    const [isChecked2, setIsChecked2] = useState(stateSignup2 || false);

    function handleChange1(e: any) {
        setIsChecked(!isChecked)
    }

    function handleChange2(e: any) {
        setIsChecked2(!isChecked2)
    }

    //on submit
    const [isSubmitted, setIsSubmitted] = useState(false)//state for form status
    function handleSubmit(e: any) {
        e.preventDefault();
        setIsSubmitted(true);
    }

    useEffect(() => {
        if (isSubmitted) {
            //update slice
            dispatch(formStage(4))
            dispatch(
                formPrivacy({
                signup1: isChecked,
                signup2: isChecked2
            }))
        }
    }, [isSubmitted, dispatch, isChecked, isChecked2, stateOutput])


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="gender" className="cbx">
                    <div className={classes.cookies}>
                        <p>Recieve updates about NewTabb+ via email</p>
                        <input
                            id="cbx"
                            type="checkbox"
                            name="signup1"
                            checked={isChecked}
                            onChange={handleChange1} /> 
                    </div>
                    <div className={classes.cookies}>
                        <p>Recieve communication by email for other products created by the NewTabb+ team</p>
                        <input
                            id="cbx"
                            type="checkbox"
                            name="signup2"
                            checked={isChecked2}
                            onChange={handleChange2} />
                    </div>
                </label>
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

export default StepThree