import React from 'react';
import classes from '../../styles/index.module.css'
import { IStepper } from './StepOne';



const StepTwo = ({ onChange, prevStep, nextStep }: IStepper) => {
    return (
        <form>
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
                <button onClick={prevStep}>next</button>
                <button onClick={nextStep}>submit</button>
            </div>
        </form>
    )
}


export default StepTwo