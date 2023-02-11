import { tweetsData } from "./data.js"  //how to receive arrays drom data.js

const tweetBtn = document.getElementById("tweet-btn")
const tweetInput = document.getElementById("tweet-input")



tweetBtn.addEventListener("click", function(){
    console.log(tweetInput.value)
    
})

function getFeedHtml(){
    let feedHtml = ''
    tweetsData.forEach(function(tweet){//forEach iterates through the array
        feedHtml += `
<div class="tweet">
    <div class="tweet-inner">
        <img src="${tweet.twiges}" class="profile-pic">
        <div>
            <p class="handle">${tweet.handle}</p>
            <p class="tweet-text">${tweet.tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                    ${tweet.replies.length} 
                </span>
                <span class="tweet-detail">
                    ${tweet.likes}
                </span>
                <span class="tweet-detail">
                    ${tweet.retweets}
                </span>
            </div>   
        </div>            
    </div>
</div>
        `
    })
    return feedHtml
}

function render(){
    document.getElementById("feed").innerHTML = getFeedHtml()// long way = const feed =document.getElementById("feed")feed.innerHTML = getFeedHtml()
}
render()
