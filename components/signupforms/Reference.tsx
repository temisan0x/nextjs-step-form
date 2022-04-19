import React from 'react'
import StepOne from '../steps/StepOne'
import StepTwo from '../steps/StepTwo'
import { StepProps } from './Switcher'
import classes from '../../styles/index.module.css'


const Reference = ({ onChange }: StepProps) => {

    const displayItems = [
        <StepOne onChange={onChange} key="1" />,
        <StepTwo onChange={onChange} key="2" />,
    ]

    const renderMarkers = (currentStep) => {
        let markers = []
        for (let i = 0; i < displayItems.length; i++) {
            markers.push(
                <div>
                    <span key={i} className={currentStep >= i ? classes.markerCrimson : classes.markerGrey} />
                </div>
            )
            return markers
        }
    }

    return (
        <>
            <h1 className={classes.formHeader}>SIgn Up</h1>
            <section className={classes.reference}>
                {renderMarkers}
            </section>
        </>
    )
}

export default Reference