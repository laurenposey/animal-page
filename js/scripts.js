$(document).ready(function(){
  $("form#animalselector").submit(function(event){
    event.preventDefault();

    var selectedAnimal = $("input:radio[name=animal]:checked").val();

    if (selectedAnimal==="insects") {
      $(".insects").show();
    } else if (selectedAnimal==="snakes") {
      $(".snakes").show();
    } else if (selectedAnimal==="turtles") {
      $(".turtles").show();
    } else {
      $(".noanimal").show();
    }


  })
})
