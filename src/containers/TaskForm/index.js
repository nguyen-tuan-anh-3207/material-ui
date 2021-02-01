import { Box, Button, Grid, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import React, { Component } from "react";
import styles from "./styles";
import * as modalActions from './../../actions/modal';
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import {reduxForm, Field} from 'redux-form';
import renderTextField from "../../components/FormHelper/TextField";
import validate from './validate';

class TaskForm extends Component {
    handleSubmitForm = data =>{
        console.log(data);
    };

    required = (value) =>{
        console.log(value);
        let err = 'Vui lòng nhập tiêu đề';
        if ( value !== null && typeof value !== 'undefined' && value.trim() !== '') {
            err = null;
        };
        return err;
    };

    minLength5 = (value) =>{
        let err = null;
        err = value.length <5 ? 'Tiêu đề phải từ 5 kí tự': null ;
        return err;
    };
  render() {
    const { classes, modalActions, handleSubmit, invalid, submitting} = this.props;
    const {hideModal} = modalActions;
    return (
      <form onSubmit = {handleSubmit(this.handleSubmitForm)}>
        <Grid container>
          <Grid item md={12}>
            {/* <TextField
              id="standard-basic"
              label="Tiêu đề"
              className={classes.textField}
            /> */}
            <Field
                id = 'title'
                label = "Tiêu đề"
                className = {classes.textField}
                margin = 'normal'
                name = 'title'
                component = {renderTextField}
                // validate = {[this.required, this.minLength5]}
            />
          </Grid>
          <Grid item md={12}>
            {/* <TextField
              id="standard-multiline-flexible"
              label="Mô tả"
              multiline
              rowsMax={4}
              className={classes.textField}
            /> */}
            <Field
                id = 'description'
                label = 'Mô tả'
                multiline
                rowsMax = '4'
                className = {classes.textField}
                margin = 'normal'
                name = 'description'
                component = {renderTextField}
            />
          </Grid>
          <Grid item md={12}>
            <Box display="flex" flexDirection="row-reverse" mt={2}>
              <Box ml={1}>
                <Button
                  variant="contained"
                  onClick = {hideModal}
                >
                  Hủy bỏ
                </Button>
              </Box>
              <Button disabled = {invalid || submitting} variant="contained" color="primary" type = 'submit'>
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
  handleSubmit: PropTypes.func,
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

const FORM_NAME = 'TASK_MANAGEMENT';
const withReduxForm = reduxForm({
  form: FORM_NAME,
  validate 
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect, withReduxForm)(TaskForm);
