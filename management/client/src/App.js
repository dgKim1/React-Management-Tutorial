import Customer from './components/Customer';
import React, { Component } from 'react';
import './App.css';
import { Paper } from '@mui/material'; 
import { Table } from '@mui/material'; 
import { TableHead } from '@mui/material';
import { TableBody } from '@mui/material';
import { TableRow } from '@mui/material';
import { TableCell } from '@mui/material';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 1080
  }
})

const customers =
[
{
  'id':1,
  'image': 'https://picsum.photos/64/64',
  'name': '홍길동',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생'
}
,
{
  'id':2,
  'image': 'https://picsum.photos/64/64',
  'name': '김도경',
  'birthday': '000813',
  'gender': '남자',
  'job': '대학생'
}
,
{
  'id':3,
  'image': 'https://picsum.photos/64/64',
  'name': 'park',
  'birthday': '001222',
  'gender': '여자',
  'job': '프로그래머'
}
]

class App extends Component {
  render() {
    const {classes} = this.props;
    return(
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
            {customers.map(c => {return (<Customer id = {c.id} image = {c.image} name = {c.name} birthday = {c.birthday} gender = {c.gender} job = {c.job}/>)})}
            </TableBody>
        </Table>
      </Paper>
    );

}
}

export default withStyles(styles)(App);
