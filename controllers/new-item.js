AuctionHouse.NewItemController = Ember.Controller.extend({
  needs: ['lot'],
  actions: {
    save: function() {
      var item = this.store.createRecord('item', {
        title: this.get('title'),
        description: this.get('description'),
        owner: this.get('owner'),
        bid_number: this.get('bid_number'),
        starting_price: this.get('starting_price'),
        backstory: this.get('backstory'),
        year_acquired: this.get('year_acquired'),
        image: this.get('image'),
      });


      item.save();

      var lot = this.get('controllers.lot.model');
      lot.get('items').pushObject(item);
      lot.save();

      this.transitionToRoute('lot', lot.id);
    }
  }
})
