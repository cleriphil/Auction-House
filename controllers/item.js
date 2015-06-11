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
        item = this.get('model');
        this.get('controllers.lot.model').get('items').removeObject(item);
        item.destroyRecord();
        debugger;
        // this.transitionToRoute('lots');
      }
    }
  }
});
