AuctionHouse.Router.map(function() {
  this.resource('items');
  this.resource('item', {path: 'item/:item_id'})
  this.resource('lots', {path: '/'});
  this.resource('lot', {path: 'lot/:lot_id'}, function(){
      this.resource('new-item');
  })
  this.resource('new-lot');
});
