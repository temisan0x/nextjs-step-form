import React from 'react';
import classes from '../../styles/index.module.css'
import Image from 'next/image';
import Logo from '../assets/images.jpg'

type AuthProps = {
    children: React.ReactNode
}

const Authentication = ({ children }: AuthProps) => {
    return (
        <>
            <div className={classes.background}>
                <div className={classes.layout}>
                    <Image src={Logo} alt=""/>
                </div>
                    {children}
            </div>
        </>
    )
}

export default Authentication