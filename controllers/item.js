AuctionHouse.ItemController = Ember.ObjectController.extend({
  needs: ['lot'],
  isEditing: false,
  actions: {
    edit: function(){
      this.set('isEditing', true);
    },
    save: function() {
      this.set('isEditing', false);
    },
    delete: function() {
      if(confirm('Are you sure??')) {
        var item = this.get('model');
        var lot = this.get('controllers.lot.model');
        lot.get('items').removeObject(item);
        lot.save();
        item.destroyRecord();
        // this.transitionToRoute('lots');
      }
    }
  }
});
