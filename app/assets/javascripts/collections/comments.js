MediumClone.Collections.Comments = Backbone.Collection.extend({

  url : function () {
    return this.story.url() + '/comments';
  },

  model : MediumClone.Models.Comment,

  initialize : function (models, options) {
    this.story = options.story;
  },

})