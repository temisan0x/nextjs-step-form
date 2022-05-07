import React, { useEffect, useState } from 'react';
import classes from '../../../styles/index.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { formSignup, formStage } from '../../redux/slices/steps';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const StepOne = ({ submitButtonText, prevButton }) => {

    const dispatch = useDispatch();

    //grab state values from redux Steptype slice
    const currentStage = useSelector((state) => state.stepState.FormStage); //count
    const formFirstName = useSelector((state) => state.stepState.FormSignup.fname);
    const formLastName = useSelector((state) => state.stepState.FormSignup.lname);
    const formEmail = useSelector((state) => state.stepState.FormSignup.email);
    const formTelephone = useSelector((state) => state.stepState.FormSignup.telephone)

    //form initial state value
    const [formData, setFormData] = useState({
        fname: formFirstName || "",
        lname: formLastName || "",
        email: formEmail || "",
        telephone: formTelephone || "",
    })

    //form values onChange
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const [errors, setErrors] = useState({});

    const validate = (formData) => {


        let formErrors = {} // set form errors to none at start
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
        //country
        if (!formData.telephone) {
            formErrors.telephone = "your telephone is required";
        }
        return formErrors
    }

    const [isSubmitted, setIsSubmitted] = useState(false)

    const submitFormData = (e) => {
        e.preventDefault()
        setErrors(validate(formData)) //check for errors
        setIsSubmitted(true)//update submit status
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitted) {
            dispatch(formStage(2))
        }
        dispatch(
            formSignup({
                fname: formData.fname,
                lname: formData.lname,
                email: formData.email,
                telephone: formData.telephone,
            })
        )
    }, [formData, isSubmitted, errors, dispatch])

    return (
        <form onSubmit={submitFormData}>
            <div className={classes.formLayout}>
                <div>
                    <p>First Name</p>
                    <input type="text" name="fname" value={formData.fname} onChange={handleChange} />
                    {errors.fname && <span className={classes.errorHandler}>{errors.fname}</span>}
                </div>

                <div>
                    <p>Last Name</p>
                    <input type="text" name="lname" value={formData.lname} onChange={handleChange} />
                    {errors.lname && <span className={classes.errorHandler}>{errors.lname}</span>}
                </div>
            </div>

            <div className={classes.formLayout}>
                <div>
                    <p>Email</p>
                    <input name="email" value={formData.email} onChange={handleChange} />
                    {errors.email && <span className={classes.errorHandler}>{errors.email}</span>}
                </div>

                <div>
                    <p>Phone Number</p>
                    <PhoneInput
                        value={formData.telephone}
                        inputProps={{
                            name: "telephone",
                            required: true,
                            autoFocus: true,
                            onChange: handleChange
                        }}
                        // masks={{ ng: '(...) ..-...-..' }}
                        country='ng'
                        // onlyCountries={['ng', 'us']}
                        // regions={'africa'}
                        // countryCodeEditable={false}
                        // containerStyle={{
                        //     width: "100%",
                        // }}
                        onlyCountries={['fr', 'at','ng','us','gh']}
                        preserveOrder={['onlyCountries', 'preferredCountries']}
                        inputStyle={{
                            paddingLeft: 60,
                            backgroundColor: "#ECECEC",
                            color: "#444",
                            width: "100%",
                            border: "none",
                            height: '40px'
                        }}
                        dropdownStyle={{
                            backgroundColor: "#ECECEC",
                        }}
                        buttonStyle={{
                            backgroundColor: "#ECECEC",
                            borderLeft: 0,
                            borderTop: 0,
                            borderBottom: 0,
                            paddingRight: 12,
                            paddingLeft: 12,
                            width: "53px",
                        }}
                    />
                    {errors.telephone && <span className={classes.errorHandler}>{errors.telephone}</span>}
                </div>
            </div>

            <div className={classes.formBtn}>
                {(prevButton) &&
                    <p>
                        <input
                            className={classes.btn}
                            type="submit"
                            value={`Back`}
                            onClick={() => dispatch(formStage(currentStage - 1))}
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