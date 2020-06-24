export const twitter = {
    initialize: () => {
        const latest_tweets = $('#latest-tweets');
        if (latest_tweets.length) {
            const config = {
                "profile": { "screenName": latest_tweets.data("twitter-name") },
                "domId": '',
                "maxTweets": latest_tweets.data("tweet-count"),
                "enableLinks": true,
                "showUser": false,
                "showTime": true,
                "dateFunction": '',
                "showRetweet": latest_tweets.data("include-retweets"),
                "customCallback": handleTweets,
                "showInteraction": false
            };
            function handleTweets(tweets) {
                var x = tweets.length;
                var n = 0;
                var html = '<ul>';
                while (n < x) {
                    html += '<li>' + tweets[n] + '</li>';
                    n++;
                }
                html += '</ul>';
                latest_tweets.html(html);
            }
            twitterFetcher.fetch(config);
        }
    }
}