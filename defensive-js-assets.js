var $themeButton = '<a target="_blank" id="install-button" class="btn icon" href="https://www.tumblr.com/theme/38849"><span id="install-theme-text">Install Theme</span></a>';
$(document).ready(function() {
  $(function() {
    $("span#inner").replaceWith('<a target="_blank" class="nav" href="http://rowrz.tumblr.com">theme</a>')
    $("body").prepend($themeButton);
    $('#install-button').animate({top: 2.5});
  })
});
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
