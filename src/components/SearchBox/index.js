import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React, { Component } from "react";
import styles from "./styles";

class SearchBox extends Component {
  render() {
    const { classes, handleChange } = this.props;
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <TextField  
            className= {classes.textField} 
            id="standard-basic" 
            label="Nhập từ khóa"
            onChange = {handleChange} />
      </form>
    );
  }
}

export default withStyles(styles)(SearchBox);
