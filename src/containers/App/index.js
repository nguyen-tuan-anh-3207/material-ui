import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React, { Component } from 'react';
import TaskBoard from '../TaskBoard';
import theme from './../../commons/themes';
import styles from './style';
 
class App extends Component {
  render() { 
    return (
      <ThemeProvider theme = {theme}>
        <TaskBoard/>
      </ThemeProvider>
    );
  }
}
 

export default withStyles(styles)(App);
