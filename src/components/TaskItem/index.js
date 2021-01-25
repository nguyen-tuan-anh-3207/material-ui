import {
    Card,
    CardActions,
    CardContent,
    Fab,
    Grid,
    Typography
} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from "@material-ui/styles";
import React, { Component } from "react";
import styles from "./styles";


class TaskItem extends Component {
  render() {
    const { classes, task, status } = this.props;
    console.log(classes);
    const { id, title } = task;
    return (
      <Card key={id}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography component="h2">{title}</Typography>
            </Grid>
            <Grid item md={4}>
              {status.label}
            </Grid>
          </Grid>
          <p>{task.desription}</p>
        </CardContent>
        <CardActions className = {classes.cardActions}>
          <Fab color="primary" aria-label="add" className ={classes.fab} size='small'>
            <AddIcon />
          </Fab>
          <Fab color="secondary" aria-label="edit" className ={classes.fab}  size='small'>
            <EditIcon />
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(TaskItem);
