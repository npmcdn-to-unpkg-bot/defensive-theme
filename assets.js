var columnsObj = {
  one: function() {
    $("#posts").css("width", "400px");
  },
  two: function() {
    $("#posts").css("width", "620px");
  },
  three: function() {
    $("#posts").css("max-width", "55%");
  }
}
$(window).load(function() {
  setTimeout(function() {
    $('#install-btn').animate({top: "3px"});
  }, 300);
});
$(document).ready(function() {
  $(function() {
    $("nav").append('<a target="_blank" class="nav" href="http://rowrz.cf/1ss0vPg">theme</a>');
    $("body").prepend('<a id="install-btn" href="http://rowrz.cf/1zYUFdI" title="Install This Theme" target="_blank" style="opacity: 1;"><span id="install-btn-txt">Install Theme</span></a>');
  })
});
document.write('<link rel="stylesheet" href="http://static.tumblr.com/4ra4qv5/Kecngi4ls/silkscreen.css"/>');
$.fn.noPo=function(e){$('.nopo').siblings(e).each(function(){$(this).remove()})};


