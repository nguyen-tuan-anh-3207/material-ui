import { withStyles } from "@material-ui/styles";
import React, { Component } from "react";
import styles from "./styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import { STATUSES } from "../../constants";
import { Box } from "@material-ui/core";

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
      <div className={classes.taskborad}>
        <Button variant="contained" color="primary" className={classes.button}>
          <AddIcon />
          Thêm mới công việc
        </Button>
        {this.renderBoard()}
      </div>
    );
  }

  renderBoard = () => {
    const { classes } = this.props;
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status, index) => {
          const taskFiltered = listTasks.filter(
            (task) => task.status === status.value
          );
          return (
            <Grid item md={4} xs={12} key={status.value}>
              <Box mt={2} mb={2}><div className={classes.status}>{status.label}</div></Box>
              <div className={classes.wrapperListTask}>
                {taskFiltered.map((task) => {
                  const { title } = task;
                  return (
                    <Card key={task.id} className={classes.card}>
                      <CardContent>
                        <Grid container justify="space-between">
                          <Grid item md={8}>
                            <Typography component="h2">{title}</Typography>
                          </Grid>
                          <Grid item md={4}>
                            {status.label}
                          </Grid>
                        </Grid>
                      </CardContent>
                      <CardActions>
                        <Button sixe="small"></Button>
                      </CardActions>
                    </Card>
                  );
                })}
              </div>
            </Grid>
          );
        })}
      </Grid>
    );
    return xhtml;
  };
}

export default withStyles(styles)(TaskBoard);
