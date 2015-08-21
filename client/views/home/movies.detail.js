Template.moviesDetail.onCreated(function(){
    var self = this;
    self.movie = new ReactiveVar();
    var _id = Router.current().params._id;
    self.autorun(function(){
        self.subsMovie = self.subscribe('getMovieById',_id);
        if(self.subsMovie.ready()){
            var movie = Movies.findOne({_id : _id});
            self.movie.set(movie);
        }
    })
})


Template.moviesDetail.rendered = function(){
    var self = Template.instance();
    self.autorun(function(c){
        if(!self.subsMovie.ready()){
            IonLoading.show();
        }else{
            IonLoading.hide();
        }
    })
}

Template.moviesDetail.helpers({
    movie : function(){
        return Template.instance().movie.get();
    },
    isReady : function(){
        return (Template.instance().subsMovie.ready())
    }
})