$.fn.noPo=function(a){if(window.location.pathname.split("/")[1]!="tagged"){$(".nopo").siblings(a).each(function(){$(this).remove()})}};
$.fn.photosetResize = function() {
    $(this).each(function(){
        var s = $('.entry').width();
        var r = $(this).attr('src').replace('500',s);
        $(this).attr('src', r).width(s);
        var hI = $(this).css('height');
        var cA = parseInt(hI, 10)* s/500;
        $(this).css('height', cA);
    });
    return this;
};
$(function() {
	$(pSets).photosetResize();
	$("nav").append('<a target="_blank" class="nav" href="http://rowrz.com/themes">theme</a>');
	$("body").prepend('<a id="install-btn" href="https://tumblr.com/theme/38849" title="Install This Theme" target="_blank" style="opacity: 1;"><span id="install-btn-txt">Install Theme</span></a>');
	setTimeout(function() {
		$('#install-btn').animate({top: "3px"});
	}, 1000);
});
