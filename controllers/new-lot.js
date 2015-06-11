AuctionHouse.NewLotController = Ember.Controller.extend({
  actions: {
    save: function() {
      var lot = this.store.createRecord('lot', {
        title: this.get('title'),
        description: this.get('description'),
        date: this.get('date'),
        // items: this.get('bid_number'),
      });

      lot.save();

      this.set('title', '');
      this.set('description', '');
      this.set('date', '');


      this.transitionToRoute('lots');



    }
  }
})
