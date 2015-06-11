AuctionHouse.LotController = Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    edit: function(){
      this.set('isEditing', true);
    },

    save: function() {
      this.set('isEditing', false);

      var lot = this.get('model')
      lot.set('title', this.get('title'));
      lot.set('description', this.get('description'));
      lot.set('date', this.get('date'));

      lot.save()
    },

    delete: function() {
      if(confirm('Are you sure??')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('lots');
      }
    }
  }
});
