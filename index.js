import { tweetsData } from "./data.js"  //how to receive arrays drom data.js

const tweetBtn = document.getElementById("tweet-btn")
const tweetInput = document.getElementById("tweet-input")

tweetBtn.addEventListener("click", function(){
    console.log(tweetInput.value)
    tweetInput.value = " "
})

function getFeedHtml(){
    
}