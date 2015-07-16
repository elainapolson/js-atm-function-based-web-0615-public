$(function(){

  var balance = 0;
  
  $('#amount').hide()

  $('#choice').change(function(e) {
    var choice = $('#choice :selected').text();
    if (choice == "-- select choice --") {
      $('#amount').hide()
    } else {
      $('#amount').show()
    }
  });

  $("#submit").click(function(e) {
    var choice = $('#choice :selected').text();

    var amount = parseInt($("#amount").val());
    // debugger;
    if (!($.isNumeric(amount))) {
      $('#balance').text('Fool don\'t be playin!');
    } else if (choice == "deposit")  {
      balance += amount;
    } else if (choice == "withdrawal") {
      balance -= amount;

    }
    $('#balance').text("balance: $" + balance);
  });


  $("#submit").click(function(e){
    // we need this to prevent the form for resubmitting, specifically on the specrunner.html (we have our project's html in here so we don't have to include fixtures in the spec)
    e.preventDefault();
  })
});