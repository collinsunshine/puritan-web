$(document).ready(function() {
  // navigation click actions 
  $('.scroll-link').on('click', function(event){
    event.preventDefault();
    var sectionID = $(this).attr("data-id");
    scrollToID('#' + sectionID, 1750);
  });
});
// scroll function
function scrollToID(id, speed){
  var offSet = 00;
  var targetOffset = $(id).offset().top - offSet;
  var mainNav = $('#main-nav');
  $('html,body').animate({scrollTop:targetOffset}, speed);
}
if (typeof console === "undefined") {
    console = {
        log: function() { }
    };
}