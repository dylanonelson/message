MediumClone.Mixins.Followable = {

  stories : function () {
    if (this._stories) {
      return this._stories;
    }

    this._stories = new MediumClone.Collections.Stories([], {
      url : this.url() + '/stories',
    });
    return this._stories;
  },

  toggleFollow : function (completionCallback) {
    var type
    var thisModel = this;

    if (!MediumClone.router._requireSignedIn(function() {
      thisModel.toggleFollow(function () {
        completionCallback();
        MediumClone.router.showUser(thisModel.id);
        Backbone.history.navigate('users/' + thisModel.id);
      });
    })) { return; }

    thisModel.fetch({
      success : function() {
        if (thisModel.get('following')) {
          type = 'DELETE';
        } else {
          type = 'POST';
        }

        $.ajax({
          url : 'api/follow',
          type : type,
          data : {
            follow: {
              followable_id : thisModel.id,
              followable_type : thisModel.followableType,
            }
          },
          success : completionCallback,
        });
      },
    });
  },

}