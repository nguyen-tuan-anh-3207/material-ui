
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/styles";
import React, { Component } from "react";
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
  render() {
    const { classes } = this.props;
    return (
      <div >
        <Button variant="contained" color="primary" className ={classes.button} >
          <AddIcon />
          Thêm mới công việc
        </Button>
        {this.renderBoard()}
      </div>
    );
  }

  renderBoard = () => {
 
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status, index) => {
          const taskFiltered = listTasks.filter(
            (task) => task.status === status.value
          );
          return <TaskList key={index} tasks = {taskFiltered} status = {status}/>
        })}
      </Grid>
    );
    return xhtml;
  };
}

export default withStyles(styles)(TaskBoard);
