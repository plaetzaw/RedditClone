import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import axios from 'axios'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
    width: '100vw'
  },
}));


export default function Posts(props) {


  const classes = useStyles();
  

  return (
    <div className={classes.root}>
      <Paper elevation={2}>Hello I am a result</Paper>
    
    </div>
  );
}