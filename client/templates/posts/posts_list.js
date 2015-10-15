Template.postsList.helpers({
    posts: function() {
        return Posts.find();
    }
});
Template.postsList.helpers({
    posts: postsData
});