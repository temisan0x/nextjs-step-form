import React from "react";
import classes from "../../../styles/index.module.css";
import { StepProps } from "./StepTwo";
import { useSelector } from "react-redux";
import Image from "next/image";
import Check from "../../assets/check.png";

const StepOutput = ({ successMessage }: StepProps) => {
  const state = useSelector((state) => state);
  const stateOutput = `Form-Completed:${JSON.stringify(state, null, 2)}`;
  console.log(stateOutput);

  return (
    <>
      <div className={classes.logo}>
        <Image src={Check} alt="success" width={40} height={40} />
      </div>
      <div className={classes.formResult}>
        <h4>{successMessage || "Thank you, please check your email!"}</h4>
        <pre>{stateOutput}</pre>
      </div>
    </>
  );
};

export default StepOutput;
