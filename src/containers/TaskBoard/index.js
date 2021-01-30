import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { bindActionCreators } from "redux";
import TaskForm from "../../components/TaskForm";
import { TaskList } from "../../components/TaskList";
import { STATUSES } from "../../constants";
import * as taskAction from "./../../actions/task";
import styles from "./styles";

class TaskBoard extends Component {
  state = {
    open: false,
  };

  // componentDidMount() {
  //   const { taskActions } = this.props;
  //   const { fetchListTask } = taskActions;
  //   fetchListTask();
  // }

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
    const { listTasks } = this.props;
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

  loadData = () => {
    const { taskActions } = this.props;
    const { fetchListTask } = taskActions;
    fetchListTask();
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          // onClick={this.openForm}
          onClick={this.loadData}
        >
          <AddIcon />
          Load Data
        </Button> {' '}
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
    fetchListTask: PropTypes.func,
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
    taskActions: bindActionCreators(taskAction, dispatch),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(TaskBoard)
);
