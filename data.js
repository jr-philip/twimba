export const tweetsData = [// how to transfer the array to index.js
    {
        handle: `@trumpMega 💎`,
        profilePic: `images/trump.jpg`,
        likes: 27,
        retweets: 10,
        deletes: 0,
        tweetText: `Buy Bitcoin, ETH Make 💰💰💰 low low prices. 
            Guaranteed return on investment. HMU DMs open!!`,
        replies: [],
        isLiked: false,
        isRetweeted: false,
        uuid: '4b161eee-c0f5-4545-9c4b-8562944223ee',
    },
    {
        handle: `@putin ✅`,
        profilePic: `images/putin.png`,
        likes: 6500,
        retweets: 234,
        deletes: 4,
        tweetText: `I need volunteers for a one-way mission to Mars 🪐. No experience necessary🚀`,
        replies: [
            {
                handle: `@Macron ✅`,
                profilePic: `images/macron.png`,
                tweetText: `Yes! Sign me up! 😎🛩`,
            },
            {
                handle: `@Kim ✅`,
                profilePic: `images/kim.png`,
                tweetText: `I went last year😴`,
            },
        ],
        isLiked: false,
        isRetweeted: false,
        uuid: '3c23454ee-c0f5-9g9g-9c4b-77835tgs2',
    },
    {
        handle: `@Boris`,
        profilePic: `images/boris.png`,
        likes: 10,
        retweets: 3,
        tweetText: `Are you a coder if you only know HTML?`,
        replies: [
            {
                handle: `@Biden ☣️`,
                profilePic: `images/biden.png`,
                tweetText: `No. Onviosuly not. Go get a job in McDonald's.`,
            },
            {
                handle: `@Obama`,
                profilePic: `images/obama.png`,
                tweetText: `You are wonderful just as you are! ❤️`,
            },
        ],
        isLiked: false,
        isRetweeted: false,
        uuid: '8hy671sff-c0f5-4545-9c4b-1237gyys45',
    },
]