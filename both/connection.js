/**
 * Created by paul on 15/10/15.
 */
Books = new Mongo.Collection('books');
Authors = new Mongo.Collection('authors');
var author1 = Authors.insert({
    firstName: 'Charles',
    lastName: 'Darwin'
});

var author2 = Authors.insert({
    firstName: 'Carl',
    lastName: 'Sagan'
});

var book1 = Books.insert({
    authorId: author1,
    name: 'On the Origin of Species'
});

var book2 = Books.insert({
    authorId: author2,
    name: 'Contact'
});


Books.helpers({
    author: function()
    {
        console.log("11111111111");
        return Authors.findOne(this.authorId);
    }
});

Authors.helpers({
    fullName: function() {

      //  console.log(this.firstName + ' ' + this.lastName);
        return this.firstName + ' ' + this.lastName;
    },
    books: function() {
      //  console.log(Books.find({ authorId: this._id }));
        return Books.find({ authorId: this._id });
    }
});