$(function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 500,
    values: [ 75, 300 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    }
  });

  $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
    " - $" + $( "#slider-range" ).slider( "values", 1 ) );

  $(".btn-watched").on("click", function(){
    $(".each-watched").toggleClass("hide-watched");
  })
});

function addToCart(id){
  $.post("/api/cart/new", {bookID: id, quantity: 1})
  .then(function(newCart){
    console.log(newCart);
  })
  .catch(function(err){
    console.log(err);
  });
}

