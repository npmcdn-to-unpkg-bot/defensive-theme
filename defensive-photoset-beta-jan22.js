


        var fP = $('iframe.photoset');

        $(window).load(function () {
            $.fn.p = function(f) {
                $(this).each(function(){
                    if ( $('.left').hasClass('one_col') ) {
                        var s = 400;
                    } else if ( $('.left').hasClass('two_col') || $('#contain').hasClass('three_col') ) {
                        var s = 200;
                    }
                    //cols.{select:Layout}();
                    var r = $(this).attr('src').replace('500',s);
                    $(this).attr('src', r).width(s);        
                    var hI = $(this).css('height');
                    var cA = parseInt(hI, 10)* s/500;
                    $(this).css('height', cA);
                });
                return this;
            };
            
            //p(fP);
            
            $(fP).p();
        
            var c = $('#posts');
            c.imagesLoaded(function(){
                c.masonry({
                    itemSelector : '#entry',
                    isResizable: true,
                    isAnimated: !Modernizr.csstransitions,
                    animationOptions: {
                        duration: 400,
                        easing: 'linear',
                        queue: false
                    }
                });
            });
            // Infinite Scroll
            {block:ifInfiniteScroll}
            c.infinitescroll({
                navSelector  : '#page-nav',
                nextSelector : '#page-nav a',
                itemSelector : '#entry',
                loadingImg : null,
                loadingText : null,
                bufferPx : 100,
                extraScrollPx: 200,
                loading: {
                    finishedMsg: null,
                }
            },
            // Infinite Scroll Callback
            function( n ) {
                p( $(n).find('iframe.photoset') );
                var h = $( n ).hide();
                h.imagesLoaded(function(){
                    h.fadeIn();
                    c.masonry( 'appended', h, true );
                });
            });
            {/block:ifInfiniteScroll}
        });
    
  </body>
</html>
