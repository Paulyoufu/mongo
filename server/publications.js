/**
 * Created by paul on 15/10/15.
 */
Meteor.publish('books', function() {
   return Books.find();
});

Meteor.publish('authors', function() {
    return Authors.find();
});
//Meteor.publish('Posts', function(){
  //  return Posts.find({}, {fields: {
    //    date: true
    //}});
//});