import { Box, Button, Grid, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import React, { Component } from "react";
import styles from "./styles";
import * as modalActions from './../../actions/modal';
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";

class TaskForm extends Component {
  render() {
    const { classes, modalActions } = this.props;
    const {hideModal} = modalActions;
    return (
      <form>
        <Grid container>
          <Grid item md={12}>
            <TextField
              id="standard-basic"
              label="Tiêu đề"
              className={classes.textField}
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              id="standard-multiline-flexible"
              label="Mô tả"
              multiline
              rowsMax={4}
              className={classes.textField}
            />
          </Grid>
          <Grid item md={12}>
            <Box display="flex" flexDirection="row-reverse" mt={2}>
              <Box ml={1}>
                <Button
                  variant="contained"
                  color="danger"
                  onClick = {hideModal}
                >
                  Hủy bỏ
                </Button>
              </Box>
              <Button variant="contained" color="primary">
                Lưu lại
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    );
  }
}

TaskForm.propTypes = {
  classes: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => {
  return {
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    modalActions: bindActionCreators(modalActions, dispatch),
  };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(TaskForm);
