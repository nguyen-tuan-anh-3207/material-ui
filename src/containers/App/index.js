import { withStyles } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import React, { Component } from "react";
import TaskBoard from "../TaskBoard";
import theme from "./../../commons/themes";
import styles from "./style";
import { Provider } from "react-redux";
import configureStore from "./../../redux/configureStore";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <ThemeProvider theme={theme}>
          <TaskBoard />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
