import React from 'react'
import StepOne from '../steps/StepOne'
import StepTwo from '../steps/StepTwo'
import { StepProps } from './Switcher'
import classes from '../../../styles/index.module.css'
import { selectAllSteps } from '../../redux/slices/steps'
import { useSelector } from 'react-redux'


const Reference = ({ onChange, state }: StepProps) => {
    const { step } = useSelector(selectAllSteps)

    const displayItems = [
        <StepOne onChange={onChange} key="0" state={state}/>,
        <StepTwo onChange={onChange} key="1" state={state}/>,
    ]

    const renderMarkers = () => {
        
        let markers = []
        for (let i = 0; i < displayItems.length; i++) {
            markers.push(
                <div>
                      <span key={i} className={ step >= i ? classes.markerCrimson : classes.markerGrey}/>
                </div>
            )
            return markers
        }
    }

    return (
        <>
            <section className={classes.reference}>
                {renderMarkers()}
            </section>
        </>
    )
}

export default Reference