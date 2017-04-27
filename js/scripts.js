$(document).ready(function(){
  $("form#height").submit(function(event){
    event.preventDefault();
    //alert("submit works")
    var heightInput = parseInt($("#heightInput").val());
    //alert(heightInput)

    if(heightInput > 60){
      $("#tall").show();
    }else if(heightInput > 40){
      $("#medium").show();
    }else{
      $("#small").show();
    }
  });
});
