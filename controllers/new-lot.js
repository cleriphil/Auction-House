AuctionHouse.NewLotController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newLot = this.store.createRecord('lot', {
        title: this.get('title'),
        description: this.get('description'),
        date: this.get('date'),
        // items: this.get('bid_number'),
      });


      newLot.save();
      this.transitionToRoute('lots');
    }
  }
})
