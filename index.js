import { tweetsData } from "./data.js"  //how to receive arrays drom data.js
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

document.addEventListener("click",function(e){// these event listener focuses on the icons in the doc
    if (e.target.dataset.like){
        handleLikeClick(e.target.dataset.like)
    }
    else if(e.target.dataset.delete){
        handleDeleteClick(e.target.dataset.delete)
    }
    else if (e.target.dataset.retweet){
        handleRetweetClick(e.target.dataset.retweet)
    }
    else if (e.target.dataset.reply){
        handleReplyClick(e.target.dataset.reply)
    }
    else if (e.target.id === 'tweet-btn'){
        handleTweetBtnClick()
    }  
})

function handleLikeClick(tweetId){// aim isto make these function log out the uuid or icon which has been clicked
    const targetTweetObj = tweetsData.filter(function(tweet){//the parameter(tweet) will rep all element in the array(tweetsData) in turn 
        return tweet.uuid === tweetId //the return tweet uuid will call on each statement as it iterates over the array
    })[0]

    if(targetTweetObj.isLiked){//decrement of likes
        targetTweetObj.likes--
    }
    else{
        targetTweetObj.likes++//increment of likes
    }
    targetTweetObj.isLiked = ! targetTweetObj.isLiked//the logical not operator(!)will flip the 1st isLiked to either t or f in regard to its original state
    render()//will help in increment of likes
}

function handleDeleteClick(tweetId){
    const targetTweetObj = tweetsData.filter(function(tweet){
        return tweet.uuid === tweetId
    })[0]

    if(targetTweetObj.isDeleted){
        targetTweetObj.deletes--
    }
    else{
        targetTweetObj.deletes++
    }
    targetTweetObj.isDeleted = ! targetTweetObj.isDeleted
    render()
}

function handleRetweetClick(tweetId) {

    const targetTweetObj = tweetsData.filter(function (tweet) {
        return tweet.uuid === tweetId
    })[0]

    if (targetTweetObj.isRetweeted) {
        targetTweetObj.retweets--
    } 
    else {
        targetTweetObj.retweets++
    }
    targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted// flipping the boolean
    render()
}

function handleReplyClick(replyId){
    document.getElementById(`replies-${replyId}`).classList.toggle(`hidden`)
}

function handleTweetBtnClick(){
    const tweetInput = document.getElementById("tweet-input")

    if(tweetInput.value){// the if statement will stop the empty tweets when the button is clicked
        tweetsData.unshift({// using push will make the tweet be at the bottom while unshift up top
            handle: `@mitch 💎`,
            profilePic: `images/mitch.jpg`,
            likes: 0,
            retweets: 0,
            tweetText: tweetInput.value,
            replies: [],
            isLiked: false,
            isRetweeted: false,
            uuid: uuidv4()//we use empty bracket inorder to return something
        })
        render()
        tweetInput.value = ""// it will make the text area  clear after tweeting
    } 
}

function getFeedHtml(){

    let feedHtml = ''

    tweetsData.forEach(function(tweet){//forEach iterates through the arrays

        let likeIconClass = ""

        if(tweet.isLiked){
            likeIconClass ="liked"
        }

        let deleteIconClass = ""

        if (tweet.isDeleted) {
            deleteIconClass = "deleted"
        }

        let retweetIconClass = " "

        if(tweet.isRetweeted){
            retweetIconClass = "retweeted"
        }

        let repliesHtml =""
        if(tweet.replies.length){
           tweet.replies.forEach(function(reply){// forEach is a good way to iterate over arrays
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
        <img src="${tweet.profilePic}" class="profile-pic">
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
                <span class="tweet-delete">
                    <i class="fa-solid fa-trash ${deleteIconClass}" 
                    data-delete="${tweet.uuid}">
                    </i>
                    ${tweet.deletes}
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
    <div class="hidden" id="replies-${tweet.uuid}">
        ${repliesHtml}
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

/*summary
1.textarea - is a html tag which help to create the multiline input field where we can tweet
2. forEach - is a method which iterates through array
3.data attributes - i used it to store data in html string in js eg.data-reply="${tweet.uuid}"
4.conditionally rendered style
5.NOT operator -i used it to flip the booleans e.g targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted
6.cdn - content delivery network*/
