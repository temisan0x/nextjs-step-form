import React, { useState } from 'react';
import classes from '../../../styles/index.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { StepProps } from '../signupforms/SignupForm';
// import { nextStep } from '../../redux/slices/steps';
import { RootState } from '../../redux/store';



const StepOne = ({ submitButtonText }: StepProps) => {
    
    const dispatch = useDispatch();

    //grab state values from redux Steptype slice
    const currentStage = useSelector((state: RootState) => state.stepState.FormStage);
    const formFirstName = useSelector((state: RootState) => state.stepState.FormSignup.fname);
    const formLastName = useSelector((state: RootState) => state.stepState.FormSignup.lname);
    const formEmail = useSelector((state: RootState) => state.stepState.FormSignup.email);
    const formDOB = useSelector((state: RootState) => state.stepState.FormSignup.dob);
    const formPassword = useSelector((state: RootState)=> state.stepState.FormSignup.password)

    //form initial state value
    const [formData, setFormData] = useState({
        fname: formFirstName || "",
        lname: formLastName || "",
        email: formEmail || "",
        dob: formDOB || "",
        password: formPassword || "",
    })

    //form values onChange
    const handleChange = (e: any) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            })
    }

    const submitFormData = (e: any) => {
        e.preventDefault()
        // dispatch(nextStep())
    }

    return (
        <form onSubmit={submitFormData}>
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
                <button>next</button>
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