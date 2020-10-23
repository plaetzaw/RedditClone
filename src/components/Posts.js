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

function getData (e){
    e.preventDefault();
    let data = axios.get(`https://www.reddit.com/r/RocketLeagueEsports.json`)
    console.log(data)
}


export default function Posts() {


  const classes = useStyles();
 

  return (
    <div className={classes.root}>
      <Paper elevation={2}>Hello Whirl</Paper>
      <Button onClick={getData}>Get Data</Button >
    </div>
  );
}