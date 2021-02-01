import CloseIcon from "@material-ui/icons/Clear";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import * as modalActions from "../../actions/modal";
import styles from "./styles";
import {Modal} from '@material-ui/core';

class CommonModal extends Component {
  render() {
    const { open, classes, component, modalActions, title } = this.props;
    const { hideModal } = modalActions;
    return (
      <Modal open={open} onClose={hideModal}>
        <div className={classes.modal}>
          <div className={classes.header}>
            <span className={classes.title}>{title}</span>
            <CloseIcon className={classes.icon} onClick={hideModal} />
          </div>
          <div className={classes.content}>{component}</div>
        </div>
      </Modal>
    );
  }
}

Modal.propTypes = {
  title: PropTypes.string,
  classes: PropTypes.object,
  open: PropTypes.bool,
  modalActions: PropTypes.shape({
    hideModal: PropTypes.func,
  }),
  component: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => {
  return {
    open: state.modal.showModal,
    component: state.modal.component,
    title: state.modal.title,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    modalActions: bindActionCreators(modalActions, dispatch),
  };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(CommonModal);
