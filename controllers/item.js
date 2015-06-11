AuctionHouse.ItemController = Ember.ObjectController.extend({
  needs: ['lot'],
  isEditing: false,
  actions: {
    edit: function(){
      this.set('isEditing', true);
    },
    save: function() {
      this.set('isEditing', false);

       var item = this.get('model')
      item.set('title', this.get('title'));
      item.set('description', this.get('description'));
      item.set('starting_price', this.get('starting_price'));
      item.set('backstory', this.get('backstory'));
      item.set('year_acquired', this.get('year_acquired'));
      item.set('image', this.get('image'));

      item.save()

    },
    delete: function() {
      if(confirm('Are you sure??')) {
        var item = this.get('model');
        var lot = this.get('controllers.lot.model');
        lot.get('items').removeObject(item);
        lot.save();
        item.destroyRecord();
        this.transitionToRoute('lots');
      }
    }
  }
});
