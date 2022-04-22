import React from 'react';
import classes from '../../../styles/index.module.css';
import { StepProps } from '../signupforms/Switcher';
import { useDispatch } from 'react-redux';
import { prevStep } from '../../redux/slices/steps';


const StepTwo = ({ onChange, state }: StepProps) => {


    const dispatch = useDispatch()

    const handleFormData = (e: any) => {
        e.preventDefault()
        dispatch(prevStep())
    }

    return (
        <form onSubmit={handleFormData}>
            <div className={classes.formLayout}>
                <div>
                    <p>First Name</p>
                    <input type="text" onChange={onChange} />
                </div>

                <div>
                    <p>Last Name</p>
                    <input type="text" onChange={onChange} />
                </div>
            </div>
            <div className={classes.formBtn}>
                <button>prev</button>
                <button type='submit'>submit</button>
            </div>
        </form>
    )
}


export default StepTwo