import React from 'react';
import classes from '../../styles/index.module.css'
import DateSection from '../date/Date';

export type IStepper = {
    nextStep?: () => void;
    prevStep?: () => void;
    onChange?: (e: any) => void;
}

const StepOne = ({ onChange, nextStep }: IStepper) => {

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

            <div className={classes.formLayout}>
                <div>
                    <p>Email</p>
                    <input type="email" onChange={onChange} />
                </div>

                <div>
                    <p>Date Of Birth</p>
                    <input type="date" onChange={onChange} className={classes.date} />
                    {/* <DateSection/> */}
                </div>
            </div>

            <div className={classes.formLayout}>
                <div className={classes.address}>
                    <p>Address</p>
                    <input type="email" onChange={onChange} />
                </div>
            </div>

            <div className={classes.formBtn}>
                <button onClick={nextStep}>next</button>
            </div>
        </form>
    )
}
//   firstName: '',
//         lastName: '',
//         DOB: '',
//         email: '',
//         telephone: '',
//         file: '',
//         message: '',
//         agreedToTerms: true,
export default StepOne