import { Box, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import TaskItem from '../TaskItem';
import styles from './styles';

export class TaskList extends Component {
    render() {
        const {classes, tasks, status} =this.props;
        // console.log(classes);
        return (
            <Grid item md={4} xs={12} key={status.value}>
              <Box mt={2} mb={2}><div>{status.label}</div></Box>
              <div >
                {tasks.map((task) => {
                  return <TaskItem key={task.id} task={task} status = {status}/>;
                })}
              </div>
            </Grid>
        )
    }
}

export default withStyles(styles)(TaskList);
