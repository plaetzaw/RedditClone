import React from 'react';
import Posts from '../components/Posts'
import axios from 'axios'
import Button from '@material-ui/core/Button'
// import { makeStyles } from '@material-ui/core/styles';

export default function Feed() {


    
function getData (e){
    e.preventDefault();
    try {
    let dataFeed =  axios.get(`https://www.reddit.com/r/GreenBayPackers.json`)
     console.log(dataFeed)
       dataFeed.data.data.children.map((posts) => {
        return <Posts key={posts.id}  />
    })

}
catch {
   console.log(e) 
}
}


    return (
      <div >
        <Button onClick={getData}>Get Data</Button >

      </div>
    );
  }