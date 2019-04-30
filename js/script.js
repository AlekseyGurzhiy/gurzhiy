$(document).ready(function(){
 
  $.fn.fade_img = function (ops) {
  var $elem = this;
  var res = $.extend({ delay: 50, speed: 600 }, ops);
  for (var i=0, pause=0, l=$elem.length; i<l; i++, pause+=res.delay) {
   $elem.eq(i).delay(pause).slideDown(res.speed);
  }
  return $elem;
 };
 
 $('.img-responsive').fade_img();
 
});