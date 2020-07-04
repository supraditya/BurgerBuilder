import React from "react";
import Auxiliary from "../../hoc/Auxiliary";
import classes from  './Layout.module.css';

const Layout = (props) => (
  <Auxiliary>
    <div>Toolbar, side drawer, Backdrop</div>
    <main className={classes.content}>{props.children}</main>
  </Auxiliary>
);
export default Layout;
