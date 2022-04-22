import React from 'react';
import classes from '../../styles/index.module.css'
import Image from 'next/image';
import Logo from '../assets/images.jpg'
import Lottie from "react-lottie";
import animation from '../assets/vibration.json'

export class AnimationPage extends React.Component {
    render() {
        const defaultProps = {
            loop: true,
            autoPlay: true,
            animationData: animation,
            renderer: 'svg',
        }
        return (
            <div>
                <Lottie
                    options={defaultProps}
                    height={300}
                    width={500}
                />
            </div>
        )
    }
}



type AuthProps = {
    children: React.ReactNode
}

const Authentication = ({ children }: AuthProps) => {
    return (
        <>
            <div className={classes.background}>
                <div className={classes.layout}>
                    <AnimationPage/>
                </div>
                    {children}
            </div>
        </>
    )
}

export default Authentication