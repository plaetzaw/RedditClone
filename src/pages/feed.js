export default function Posts() {


    const classes = useStyles();
    
  
    return (
      <div className={classes.root}>
        <Paper elevation={2}>Hello Whirl</Paper>
        <Button onClick={getData}>Get Data</Button >
      </div>
    );
  }