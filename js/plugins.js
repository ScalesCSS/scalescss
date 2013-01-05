getTwitters('tweet', { 
    id: 'devtroit', 
    count: 3, 
    enableLinks: true, 
    ignoreReplies: true, 
    clearContents: true,
    template: '"%text%" <a href="http://twitter.com/%user_screen_name%/statuses/%id_str%/">%time%</a>'
});