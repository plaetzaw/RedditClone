import axios from "axios";
import { GET_SUBREDDIT_DATA } from "./actionTypes";

export const getSubredditData = () => {
    axios.get(`https://www.reddit.com/r/GreenBayPackers.json`)
    .then((subredditData) => {
    dispatchEvent({ type: GET_SUBREDDIT_DATA, payload: subredditData.data})
    })
    .catch((err) => console.log(err))
}   