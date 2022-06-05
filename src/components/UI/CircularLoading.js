/*
-CircularLoading component is used to render a loading spinnder
-the loading panner is passed to the component through props
*/
import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import clsases from "./CircularLoading.module.css";
const CircularLoading = (props) => {
  return (
    <div className={clsases.circle}>
      <CircularProgress color="inherit" />
      <p>{props.panner}...</p>
    </div>
  );
};
export default CircularLoading;
