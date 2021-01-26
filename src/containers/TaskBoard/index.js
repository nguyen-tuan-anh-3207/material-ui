import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/styles";
import React, { Component } from "react";
import TaskForm from "../../components/TaskForm";
import { TaskList } from "../../components/TaskList";
import { STATUSES } from "../../constants";
import styles from "./styles";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import * as taskActions from './../../actions/task';
import PropTypes from 'prop-types';

class TaskBoard extends Component {
  state = {
    open: false,
  };

  componentDidMount(){
    const {taskActions} = this.props;
    const {fetchListTaskRequest} = taskActions;
    fetchListTaskRequest();
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  openForm = () => {
    this.setState({
      open: true,
    });
  };

  renderForm = () => {
    var { open } = this.state;
    var xhtml = null;
    xhtml = <TaskForm handleClose={this.handleClose} open={open} />;
    return xhtml;
  };

  renderBoard = () => {
    const {listTasks} = this.props;
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status, index) => {
          const taskFiltered = listTasks.filter(
            (task) => task.status === status.value
          );
          return <TaskList key={index} tasks={taskFiltered} status={status} />;
        })}
      </Grid>
    );
    return xhtml;
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.openForm}
        >
          <AddIcon />
          Thêm mới công việc
        </Button>
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }


}

TaskBoard.propsTypes = {
      classes: PropTypes.object,
      taskActions: PropTypes.shape({
        fetchListTask : PropTypes.func,
      }),
      listTasks: PropTypes.array,

};

const mapStateToProps = (state, ownProps) => {
  return {
    listTasks: state.task.listTask,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    taskActions: bindActionCreators(taskActions, dispatch)
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(TaskBoard)
);


