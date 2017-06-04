$(document).ready(function(){
  $('.menu-small-icon').click(function(){
    $(".menu-small-dropdown").show();
  });
  $(".menu-small-dropdown li").click(function(){
    $( ".menu-small-dropdown" ).hide();
  });
});
