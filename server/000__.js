if (Meteor.isServer) {
    Meteor.startup(function () {
        Categories._ensureIndex({"name": 1});
        Tags._ensureIndex({"name": 1});
        Movies._ensureIndex({"movieId" : 1, "title": 1});
    });
}