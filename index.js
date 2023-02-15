import { tweetsData } from "./data.js"  //how to receive arrays drom data.js

const tweetBtn = document.getElementById("tweet-btn")
const tweetInput = document.getElementById("tweet-input")



tweetBtn.addEventListener("click", function(){
    console.log(tweetInput.value)
})

document.addEventListener("click",function(e){
    console.log(e.target.dataset.like)
    console.log(e.target.dataset.retweet)
    console.log(e.target.dataset.reply)
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
                    <i class="fa-regular fa-comment-dots" data-reply="${tweet.uuid}"></i>
                    ${tweet.replies.length} 
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-heart" data-like="${tweet.uuid}"></i>
                    ${tweet.likes}
                </span>
                <span class="tweet-detail">
                <i class="fa-solid fa-heart" data-retweet="${tweet.uuid}"></i>
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
