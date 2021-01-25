import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/styles";
import React, { Component } from "react";
import TaskForm from "../../components/TaskForm";
import { TaskList } from "../../components/TaskList";
import { STATUSES } from "../../constants";
import styles from "./styles";

const listTasks = [
  {
    id: 1,
    title: "Read book",
    desription: "read matreial ui book",
    status: 0,
  },
  {
    id: 2,
    title: "play football",
    desription: "with my friends",
    status: 2,
  },
  {
    id: 3,
    title: "play game",
    desription: "with my children",
    status: 1,
  },
];

class TaskBoard extends Component {
  state = {
    open: false,
  };
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
    xhtml = (
        <TaskForm handleClose={this.handleClose} open = {open}/>
    );
    return xhtml;
  };

  renderBoard = () => {
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

export default withStyles(styles)(TaskBoard);
