"use strict";

$(document).ready(function () {

    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
        isClosed = false,
        sideBar = $("#sidebar-nav");

//Add and remove classes to style menu button
    trigger.on('click', function () {
        hamburger_cross();
    });

    function hamburger_cross() {
        if (isClosed == true) {
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    }

//Open and Close Side bar
    $('[data-toggle="offcanvas"]').on('click', function () {
        $('#wrapper').toggleClass('toggled');
    });


//Scroll to section selected and toggle active state on links
    sideBar.on('click','a', function (e) {
        e.preventDefault();

        var $this = $(this);

        sideBar.find('.active').removeClass('active');

        if(!$this.parent().is('#sidebar-nav'))
            $this.parent().addClass('active');

        var href = $this.attr('href');
        var anchor = $(href).offset().top;

        $('html, body').animate({scrollTop: anchor - 110});
        return false;
    });

});



