import { tweetsData } from "./data.js"  //how to receive arrays drom data.js

const tweetBtn = document.getElementById("tweet-btn")
const tweetInput = document.getElementById("tweet-input")



tweetBtn.addEventListener("click", function(){
    console.log(tweetInput.value)
})

document.addEventListener("click",function(e){// these event listener focuses on the icons in the doc
    if (e.target.dataset.like){
        handleLikeClick(e.target.dataset.like)
    }else if(e.target.dataset.retweet){
        handleRetweetClick(e.target.dataset.retweet)
    } 
   
})

function handleLikeClick(tweetId){// aim isto make these function log out the uuid or icon which has been clicked
    const targetTweetObj = tweetsData.filter(function(tweet){//the parameter(tweet) will rep all element in the array(tweetsData) in turn 
        return tweet.uuid === tweetId //the return tweet uuid will call on each statement as it iterates over the array
    })[0]

    if(targetTweetObj.isLiked){//decrement of likes
        targetTweetObj.likes--
    }else{
        targetTweetObj.likes++//increment of likes
    }
    targetTweetObj.isLiked = ! targetTweetObj.isLiked//the logical not operator(!)will flip the 1st isLiked to either t or f in regard to its original state
    render()//will help in increment of likes
}

function handleRetweetClick(tweetId) {

    const targetTweetObj = tweetsData.filter(function (tweet) {
        return tweet.uuid === tweetId
    })[0]

    if (targetTweetObj.isRetweeted) {
        targetTweetObj.retweets--
    } else {
        targetTweetObj.retweets++
    }
    targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted// flipping the boolean
    render()
}

function getFeedHtml(){

    let feedHtml = ''

    tweetsData.forEach(function(tweet){//forEach iterates through the arrays

        let likeIconClass = ""

        if(tweet.isLiked){
            likeIconClass ="liked"
        }

        let retweetIconClass = " "

        if(tweet.isRetweeted){
            retweetIconClass = "retweeted"
        }

        let repliesHtml =""
        if(tweet.replies.length){
           tweet.replies.forEach(function(reply){
            repliesHtml += `
<div class="tweet-reply">
    <div class="tweet-inner">
        <img src="${reply.profilePic}" class="profile-pic">
            <div>
                <p class="handle">${reply.handle}</p>
                <p class="tweet-text">${reply.tweetText}</p>
            </div>
    </div>
</div>`
    })
}

        feedHtml += `
<div class="tweet">
    <div class="tweet-inner">
        <img src="${tweet.images}" class="profile-pic">
        <div>
            <p class="handle">${tweet.handle}</p>
            <p class="tweet-text">${tweet.tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                    <i class="fa-regular fa-comment-dots" 
                    data-reply="${tweet.uuid}">
                    </i>
                    ${tweet.replies.length} 
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-heart ${likeIconClass}" 
                    data-like="${tweet.uuid}">
                    </i>
                    ${tweet.likes}
                </span>
                <span class="tweet-detail">
                <i class="fa-solid fa-retweet ${retweetIconClass}" 
                data-retweet="${tweet.uuid}">
                </i>
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
