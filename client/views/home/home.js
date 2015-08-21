Template.home.onCreated(function(){
    var self = this;
    self.movies = new ReactiveVar();
    self.autorun(function(c){
        self.subsMovies = self.subscribe('getMovies',{tags : 'asian'}, 20);
        if(self.subsMovies.ready()){
            var movies = Movies.find({tags : 'asian'}, {limit : 20});
            self.movies.set(movies);
        }
    })
});

Template.home.rendered = function(){
    var self = Template.instance();
    self.autorun(function(){
        if(!self.subsMovies.ready()){
            IonLoading.show();
        } else {
            IonLoading.hide();
        }
    })
}

Template.home.helpers({
    movies : function(){
        return Template.instance().movies.get();
    },
    isReady : function(){
        return (Template.instance().subsMovies.ready());
    }
})