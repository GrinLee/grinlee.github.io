jQuery(function ($) {

    'use strict';

    //  PreLoader-----------------------------------------------------------------

    (function () {
        $('#preloader').delay(200).fadeOut('slow');
    }());


    // Sticky Sidebar--------------------------------------------------------------------

    $('.left-col-block, .right-col-block').theiaStickySidebar();

}); // JQuery end