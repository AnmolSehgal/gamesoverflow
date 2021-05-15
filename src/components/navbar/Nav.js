import React from "react";
import "./styles.css";
import Header from "./Header";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({});

export default function Nav() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Header />
    </div>
  );
}
