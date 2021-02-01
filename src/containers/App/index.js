import { withStyles } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import React, { Component } from "react";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalLoading from "../../components/GlobalLoading";
import CommonModal from "../../components/CommonModal";
import TaskBoard from "../TaskBoard";
import theme from "./../../commons/themes";
import configureStore from "./../../redux/configureStore";
import styles from "./style";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <ThemeProvider theme={theme}>
          <ToastContainer />
          <GlobalLoading/>
          <CommonModal/>
          <TaskBoard />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
