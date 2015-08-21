if(Meteor.isServer){
    Meteor.methods({
        importMovieFromCSV : function(movie){
            try{
                //console.log(movie)
                check(movie, {
                    movieId : String,
                    title : String,
                    thumbnail : String,
                    images : [String],
                    embed : String,
                    src : String,
                    categories : [String],
                    tags : [String],
                    duration : Number
                });

                var obj = Movies.findOne({movieId : movie.movieId});
                if(!obj){
                    _.each(movie.categories, function (c) {
                        var c = c.trim();
                        var cat = Categories.findOne({name : c});
                        if(cat){
                            Categories.update({name : c},{
                                $inc : {count : 1}
                            });
                        }else{
                            Categories.insert({
                                name : c,
                                count : 1
                            });
                        }
                    });

                    _.each(movie.tags , function(t){
                        var t = t.trim();
                        var tag = Tags.findOne({name : t});
                        if(tag){
                            Tags.update({name : t}, {
                                $inc : {count :1}
                            });
                        }else{
                            Tags.insert({
                                name : t,
                                count : 1
                            });
                        }
                    });

                    movie = _.extend(movie, { importedAt : new Date});
                    var mId = Movies.insert(movie);
                    return mId;
                }
            }catch(ex){
                console.error(ex)
            }
        }
    })
}