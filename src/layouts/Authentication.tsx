import React from "react";
import classes from "../../styles/index.module.css";
import Image from "next/image";
import Logo from "../assets/images.jpg";
import Lottie from "react-lottie";
import animation from "../assets/astro.json";

export class AnimationPage extends React.Component {
  render() {
    const defaultProps = {
      loop: true,
      autoPlay: true,
      animationData: animation,
      renderer: "svg",
    };
    return (
      <div>
        <Lottie options={defaultProps} height={300} width={300} />
      </div>
    );
  }
}

type AuthProps = {
  children: React.ReactNode;
};

const Authentication = ({ children }: AuthProps) => {
  return (
    <>
      <div className={classes.background}>
        <div className={classes.layout}>
          {/* <div className={classes.header}>
            <h1>NewTabb&#43;</h1>
          </div> */}
          <AnimationPage />
        </div>
        {children}
      </div>
      <p className={classes.footer}>Created with ❤️  by Temycodes</p>
    </>
  );
};

export default Authentication;
