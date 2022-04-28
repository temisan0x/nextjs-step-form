import React from 'react';
import classes from '../../../styles/index.module.css';
import { StepProps } from './StepTwo';
import { useSelector } from 'react-redux';

const StepOutput = ({ successMessage}: StepProps) => {

    const state = useSelector(state => state);
    const stateOutput = (`JSON Data Form-Completed:${JSON.stringify(state, null, 2)}`)
    console.log(stateOutput);
    
    return (
        <div>
            <pre>{stateOutput}</pre>
        </div>
    )
}

export default StepOutput