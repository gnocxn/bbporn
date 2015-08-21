if(Meteor.isServer){
    Meteor.publish('getCategories',function(limit){
        var limit = limit || 10;
        return Categories.find({}, {sort : {count : -1, name : 1},limit : limit});
    });

    Meteor.publish('getTags', function(param,limit){
        var param = param || {},
            limit = limit || 20;
        return Tags.find(param, {sort : {count : -1, name : 1},limit : limit});
    });

    Meteor.publish('getMovies', function(param, limit){
        var param = param || {},
            limit = limit || 20;
        return Movies.find(param, {limit : limit});
    });

    Meteor.publish('getMovieById', function(id){
        return Movies.find({_id : id});
    })
}