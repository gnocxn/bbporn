Template.registerHelper('randomImages',function(images){
    var length = _.size(images),
        index = _.random(0, length);
    return images[index];
})