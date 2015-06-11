AuctionHouse.NewItemController = Ember.Controller.extend({
  needs: ['lot'],
  actions: {
    save: function() {
      var item = this.store.createRecord('item', {
        title: this.get('title'),
        description: this.get('description'),
        owner: this.get('owner'),
        starting_price: this.get('starting_price'),
        backstory: this.get('backstory'),
        year_acquired: this.get('year_acquired'),
        image: this.get('image'),
        bid_number: Math.round(Math.random() * 100000),
      });


      item.save();

      var lot = this.get('controllers.lot.model');
      lot.get('items').pushObject(item);
      lot.save();


      this.set('title', '');
      this.set('description', '');
      this.set('owner', '');
      this.set('starting_price', '');
      this.set('backstory', '');
      this.set('year_acquired', '');
      this.set('image', '');

      this.transitionToRoute('lot', lot.id);
    }
  }


})
