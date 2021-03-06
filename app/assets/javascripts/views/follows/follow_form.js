MediumClone.Views.FollowForm = Backbone.View.extend({

  template : JST['follows/follow_form'],

  render : function () {
    var rendered = this.template({
      user : this.model,
    });
    
    this.$el.html(rendered);
    return this;
  },

  initialize : function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  events : {
    'click .follow-user-button' : 'toggleFollowUser',
  },

  toggleFollowUser : function (event) {
    var thisView = this;
    this.model.toggleFollow(function () {
      if (thisView.model.get('following')) { 
        MediumClone.currentUser.followedAuthors().remove(thisView.model.id);
      } else {
        MediumClone.currentUser.followedAuthors().add(thisView.model);
      }
      thisView.model.fetch();
    });
  },

})