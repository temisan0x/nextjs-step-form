import React, { useEffect, useState } from 'react';
import classes from '../../../styles/index.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { formSignup, formStage } from '../../redux/slices/steps';
import { StepProps } from './StepTwo';



const StepOne = ({ submitButtonText, prevButton }: StepProps) => {

    const dispatch = useDispatch();

    //grab state values from redux Steptype slice
    const currentStage = useSelector((state: RootState) => state.stepState.FormStage); //count
    const formFirstName = useSelector((state: RootState) => state.stepState.FormSignup.fname);
    const formLastName = useSelector((state: RootState) => state.stepState.FormSignup.lname);
    const formEmail = useSelector((state: RootState) => state.stepState.FormSignup.email);
    const formDOB = useSelector((state: RootState) => state.stepState.FormSignup.dob);
    const formPassword = useSelector((state: RootState) => state.stepState.FormSignup.password)

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
    
    const [errors, setErrors] = useState({});
    const validate = (formData: any) => {
        let formErrors = {} //empty on first request;
        //fname
        if (!formData.fname) {
            formErrors.fname = "first name required"
        }
        //last name
        if (!formData.lname) {
            formErrors.lname = "last name required"
        }
        //email
        const emailRegex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!formData.email || !emailRegex.test(formData.email)) {
            formErrors.email = "valid email is required"
        }
        //password
        const passwordRegex = new RegExp('(?=.*[a-z])+(?=.*[A-Z])+(?=.*[0-9])+(?=.{10,})')
        if (!formData.password || !passwordRegex.test(formData.password) ) {
            formErrors.password = "The minimum password length is 10 characters and must contain at least 1 lowercase letter, 1 uppercase letter and 1 number"
        }
        return formErrors
    }

    const [isSubmitted, setIsSubmitted] = useState(false)

    const submitFormData = (e: any) => {
        e.preventDefault()
        setErrors(validate(formData)) //check for errors
        setIsSubmitted(true)//update submit status
        // dispatch(nextStep())
    }

    useEffect(() => {
        if (Object.keys(errors).length ===0 && isSubmitted) {
            dispatch(formStage(2))
        }
        dispatch(
            formSignup({
                fname: formData.fname,
                lname: formData.lname,
                email: formData.email,
                dob: formData.dob,
                password: formData.password,
            })
        )
    }, [formData,isSubmitted, errors, dispatch])

    return (
        <form onSubmit={submitFormData}>
            <div className={classes.formLayout}>
                <div>
                    <p>First Name</p>
                    <input type="text" name="fname" value={formData.fname} onChange={handleChange} />
                    {errors.fname && <span className={classes.errorHandler}>{ errors.fname}</span>}
                </div>

                <div>
                    <p>Last Name</p>
                    <input type="text" name="lname" value={formData.lname} onChange={handleChange}/>
                    {errors.lname && <span className={classes.errorHandler}>{ errors.lname}</span>}
                </div>
            </div>

            <div className={classes.formLayout}>
                <div>
                    <p>Email</p>
                    <input name="email" value={formData.email} onChange={handleChange} />
                    {errors.email && <span className={classes.errorHandler}>{ errors.email}</span>}
                </div>

                <div>
                    <p>Password</p>
                    <input type="password" name="password" className={classes.password} value={formData.password} onChange={handleChange} />
                    {errors.password && <span className={classes.errorHandler}>{ errors.password}</span>}
                </div>
            </div>

            <div className={classes.formBtn}>
                {(prevButton) &&
                    <p>
                        <input
                            className={classes.btn}
                            type="submit"
                            value={`Back`}
                            onClick={()=> dispatch(formStage(currentStage - 1))}
                        />
                    </p>
                }
                <p>
                    <input
                        className={classes.btn}
                        type="submit"
                        value={submitButtonText || 'submit'}
                    />
                </p>
            </div>
        </form>
    )
}
export default StepOne