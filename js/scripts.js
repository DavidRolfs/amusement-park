$(document).ready(function(){
  $("form#height").submit(function(){
    //alert("submit works")
    var heightInput = parseInt($("#heightInput").val());
    //alert(heightInput)

    if(heightInput > 40){
      alert("You are tall enough to ride!!");
    }else{
      alert("sorry you are not tall enough");
    }


  });
});
