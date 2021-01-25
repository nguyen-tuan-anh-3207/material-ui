import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React, { Component } from "react";
import styles from "./styles";

class TaskForm extends Component {

  render() {
    const {open, handleClose} = this.props;
    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <h1>Dialog Content</h1>
          <TextField id="standard-basic" label="name" />
          <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          rowsMax={4}
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(TaskForm);
