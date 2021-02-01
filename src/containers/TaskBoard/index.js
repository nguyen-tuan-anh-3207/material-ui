import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { bindActionCreators } from "redux";
import SearchBox from "../../components/SearchBox";
import TaskForm from "../TaskForm";
import { TaskList } from "../../components/TaskList";
import { STATUSES } from "../../constants";
import * as taskAction from "./../../actions/task";
import * as modalActions from "./../../actions/modal";
import styles from "./styles";

class TaskBoard extends Component {
  state = {
    open: false,
  };

  componentDidMount() {
    const { taskActions } = this.props;
    const { fetchListTask } = taskActions;
    fetchListTask();
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  openForm = () => {
    const {modalActions} = this.props;
    const {showModal, changeModalContent, changeModalTitle} = modalActions;
    showModal();
    changeModalTitle('Thêm mới công việc');
    changeModalContent(<TaskForm/>);
  };

  // renderForm = () => {
  //   var { open } = this.state;
  //   var xhtml = null;
  //   xhtml = <TaskForm handleClose={this.handleClose} open={open} />;
  //   return xhtml;
  // };

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

  handleFilter = (e)=> {
   const {value} = e.target;
   const { taskActions } = this.props;
    const { filterTask } = taskActions;
    filterTask(value);
  };

  renderSearchBox = ()=> {
    let xhtml = null;
    xhtml = (
      <SearchBox handleChange = {this.handleFilter}/>
    );
    return xhtml;
  }

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
        {this.renderSearchBox()}
        {this.renderBoard()}
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
  modalActions : PropTypes.shape({
    showModal: PropTypes.func,
    hideModal : PropTypes.func,
    changeModalTitle: PropTypes.func,
    changeModalContent: PropTypes.func, 
  }),
};

const mapStateToProps = (state, ownProps) => {
  return {
    listTasks: state.task.listTask,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    taskActions: bindActionCreators(taskAction, dispatch),
    modalActions: bindActionCreators(modalActions, dispatch),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(TaskBoard)
);
