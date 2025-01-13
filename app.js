
// $('.carousel').carousel()

// $('.carousel').carousel({
//   interval: 2000
// })


AOS.init();

$(document).ready(function(){
    $("document").load(function(){
      $("#animate").animate({left: '250px'});
    });
  });



  $(document).ready(function(){

    $("#btn")
    $("ul_list").append("<li>food</li>")
      
    });
  
    
$(document).ready(function(){
  $("#hide").mouseenter(function(){
    $("p").hide();
  });
  $("#show").click(function(){
    $("p").show();
  });
});

  
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".col.bg-light").each(function() {
      var searchText = $(this).find('a').text().toLowerCase(); // Get the text content of the anchor tag
      if (searchText.includes(value)) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
});


var name="TAZZAKKA";
    console.log(name.toLowerCase())
    console.log(name.toUpperCase())