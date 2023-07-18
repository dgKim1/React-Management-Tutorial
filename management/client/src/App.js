import Customer from './components/Customer';
import CustomerAdd from './components/CustomerAdd';
import React, { Component } from 'react';
import './App.css';
import { Paper } from '@mui/material'; 
import { Table } from '@mui/material'; 
import { TableHead } from '@mui/material';
import { TableBody } from '@mui/material';
import { TableRow } from '@mui/material';
import { TableCell } from '@mui/material';
import {withStyles} from '@material-ui/core/styles';
import {CircularProgress} from '@mui/material';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto'
  },
  table: {
    minWidth: 1080
  },
  progress: {
    marginTop: theme.spacing(2)
  }
});

/*리엑트 라이브러리가 컴포넌트를 실행할때

1) constructor()
2) componentWillMount()
3) render() 컴포넌트 그림
4) componentDidMount()

*/

/*
props(변하지 않음) or state => souldComponentUpdate()
-->다시 render()를 불러와서 뷰를 갱신해줌
*/
class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      customers: '',
      completed: 0
    }
  }

  stateRefresh = () => {
    this.setState({
      customers: '',
      completed: 0
    });
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({completed: completed >= 100 ? 0 : completed + 5});
  }

  render() {
    const {classes} = this.props;
    return(
      <div>
      <Paper className={classes.root}>
        <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {this.state.customers ? this.state.customers.map(c => { return (<Customer key = {c.id} id = {c.id} image = {c.image} name = {c.name} birthday = {c.birthday} gender = {c.gender} job = {c.job}/>);
             }) : 
              <TableRow>
                <TableCell colSpan="6" align="center">
                   <CircularProgress className={classes.progress} variant="determinate" value = {this.state.completed}/>
                </TableCell>              
              </TableRow>
              }
            </TableBody>
        </Table>
      </Paper>
      <CustomerAdd stateRefresh={this.stateRefresh}/>
      </div>

    );

}
}

export default withStyles(styles)(App);
