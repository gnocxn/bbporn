Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function() {
    this.route('home', {
        path: '/'
    });

    this.route('movies.detail',{
        path: '/movies/:_id',
        template : 'moviesDetail'
    })
});