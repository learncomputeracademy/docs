/* global hljs */
$(document).ready(function () {
    "use strict";
    //page loader
    Pace.on("done", function () {
        //console.log("finished");
        $('.loader').fadeIn(1500);
    });
    //navbar add remove calss
    var header = $(".no-background");
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 1) {
            header.removeClass('no-background').addClass("navbar-bg");
        } else {
            header.removeClass("navbar-bg").addClass('no-background');
        }
    });
    //multi dropdown
    $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
        var $el = $(this);
        var $parent = $(this).offsetParent(".dropdown-menu");
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');
        $(this).parent("li").toggleClass('show');
        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
            $('.dropdown-menu .show').removeClass("show");
        });
        if (!$parent.parent().hasClass('navbar-nav')) {
            $el.next().css({"top": $el[0].offsetTop, "left": $parent.outerWidth() - 4});
        }
        return false;
    });
    //Sticky sidebar
    $('.leftSidebar, .content, .rightSidebar')
            .theiaStickySidebar({
                additionalMarginTop: 111
            });
    $('.faqLeftSidebar, .faqContent').theiaStickySidebar();
    //Language dropdown
    $("#lng_select").msDropdown();
    //Navbar top search
    $(".navbar").each(function () {
        $("li.search > a", this).on("click", function (e) {
            e.preventDefault();
            $(".top-search").slideToggle();
        });
    });
    $(".input-group-addon.close-search").on("click", function () {
        $(".top-search").slideUp();
    });

    //Sidebar
    $('.overlay').on('click', function () {
        $('#sidebar, .page-content').toggleClass('active');
        $('#sidebar').removeClass('active');
        $('.overlay').fadeOut();
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, .page-content').toggleClass('active');
        $('.overlay').fadeIn();
        $('.collapse.in').addClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    //Highlight
    var snippets = document.querySelectorAll('.snippet');
    [].forEach.call(snippets, function (snippet) {
        snippet.firstChild.insertAdjacentHTML('beforebegin', '<button class="btn-snippet" data-clipboard-snippet><img class="clippy" width="13" src="/assets/img/clippy.svg" alt="Copy to clipboard"></button>');
    });
    var clipboardSnippets = new ClipboardJS('[data-clipboard-snippet]', {
        target: function (trigger) {
            return trigger.nextElementSibling;
        }
    });
    clipboardSnippets.on('success', function (e) {
        e.clearSelection();
        showTooltip(e.trigger, 'Copied!');
    });
    clipboardSnippets.on('error', function (e) {
        showTooltip(e.trigger, fallbackMessage(e.action));
    });
    var btns = document.querySelectorAll('.btn-snippet');
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener('mouseleave', clearTooltip);
        btns[i].addEventListener('blur', clearTooltip);
    }
    function clearTooltip(e) {
        e.currentTarget.setAttribute('class', 'btn-snippet');
        e.currentTarget.removeAttribute('aria-label');
    }
    function showTooltip(elem, msg) {
        elem.setAttribute('class', 'btn-snippet tooltipped tooltipped-s');
        elem.setAttribute('aria-label', msg);
    }
    function fallbackMessage(action) {
        var actionMsg = '';
        var actionKey = (action === 'cut' ? 'X' : 'C');
        if (/iPhone|iPad/i.test(navigator.userAgent)) {
            actionMsg = 'No support :(';
        } else if (/Mac/i.test(navigator.userAgent)) {
            actionMsg = 'Press ⌘-' + actionKey + ' to ' + action;
        } else {
            actionMsg = 'Press Ctrl-' + actionKey + ' to ' + action;
        }
        return actionMsg;
    }
    $('pre code').each(function (i, block) {
        hljs.highlightBlock(block);
    });

    //metisMenu
    $(".sidebarMenu").metisMenu();

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on("click", function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 150)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });
    //Back to top
    $('body').append('<div id="toTop" class="btn-top"><i class="ti-upload"></i></div>');
    $(window).scroll(function () {
        if ($(this).scrollTop() !== 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').on('click', function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });
    //Video popup
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    //testimonial
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: false,
        nav: true,
        navText: [
            "<i class='ti-angle-left'></i>",
            "<i class='ti-angle-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});
$(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();
    // Assign active class to nav links while scolling
    $(".page-section").each(function (i) {
        if ($(this).position().top <= scrollDistance) {
            $(".navigation a.active").removeClass("active");
            $(".navigation a")
                    .eq(i)
                    .addClass("active");
        }
    });
}).scroll();


// LCA Chat

let lcaCustomContact = document.querySelector('#lca-custom-contact');
lcaCustomContact.innerHTML = `<div class="lcacontactus-message left" id="lcacontactus-widget">
            <div class="callback-countdown-block">
                <div class="callback-countdown-block-close">
                    <svg width="14" height="14" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="Canvas" transform="translate(-4087 108)">
                            <g id="Vector">
                                <use xlink:href="#path0_fill" transform="translate(4087 -108)" fill="currentColor"></use>
                            </g>
                        </g>
                        <defs>
                            <path id="path0_fill" d="M 14 1.41L 12.59 0L 7 5.59L 1.41 0L 0 1.41L 5.59 7L 0 12.59L 1.41 14L 7 8.41L 12.59 14L 14 12.59L 8.41 7L 14 1.41Z"></path>
                        </defs>
                    </svg>
                </div>
                <div class="callback-countdown-block-phone">
                    <p>
                        Click on any number<br>
                        to talk to us
                    </p>
                    <a href="tel:+918918669308">8918-669-308</a>
                    <a href="tel:+918918560266">8918-560-266</a>
                    
                </div>
                
            </div>
            <div class="messangers-block">
                <a target="_blank" href="https://m.me/learncomputeracademy" class="messanger facebook">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M224 32C15.9 32-77.5 278 84.6 400.6V480l75.7-42c142.2 39.8 285.4-59.9 285.4-198.7C445.8 124.8 346.5 32 224 32zm23.4 278.1L190 250.5 79.6 311.6l121.1-128.5 57.4 59.6 110.4-61.1-121.1 128.5z"></path>
                        </svg>
                    </span>
                    <p>Facebook messenger</p>
                </a>
                <a target="_blank" href="https://wa.me/+918918669308" class="messanger fb">
                    <span style="background: #1ebea5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" class=""></path></svg>
                    </span>
                    <p>Whatsapp</p>
                </a>
                <a target="_blank" href="https://g.page/learncomputeracademy?gm" class="messanger telegram">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="45" height="45" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M15.5 4.5c0 .56.2 1.04.58 1.43c.37.39.84.57 1.42.57c.55 0 1-.18 1.41-.57c.39-.39.59-.87.59-1.43c0-.53-.2-1-.61-1.41c-.39-.4-.89-.59-1.39-.59c-.55 0-1 .19-1.4.59c-.39.41-.6.88-.6 1.41m6.5 0c0 1-.39 2.19-1.14 3.56c-.75 1.38-1.5 2.5-2.25 3.38l-1.11 1.31c-.36-.37-.78-.86-1.28-1.45c-.5-.6-1.17-1.63-1.99-3.1C13.4 6.73 13 5.5 13 4.5c0-1.25.42-2.31 1.3-3.19C15.17.44 16.23 0 17.5 0c1.23 0 2.3.44 3.17 1.31c.88.88 1.33 1.94 1.33 3.19m-1 7.08V19c0 .5-.2 1-.61 1.39c-.39.41-.89.61-1.39.61H5c-.5 0-1-.2-1.39-.61C3.2 20 3 19.5 3 19V5c0-.5.2-1 .61-1.39C4 3.2 4.5 3 5 3h6.2c-.12.63-.2 1.13-.2 1.5c0 1.19.44 2.59 1.28 4.2c.85 1.6 1.56 2.8 2.13 3.51c.59.74 1.12 1.37 1.62 1.9l1.47 1.59l1.5-1.59c1.27-1.61 1.94-2.47 2-2.53M9 14.5v1.39h2.25C11 17 10.25 17.53 9 17.53c-.69 0-1.27-.25-1.73-.75A2.51 2.51 0 0 1 6.56 15c0-.69.24-1.28.71-1.78c.46-.5 1.04-.75 1.73-.75c.66 0 1.19.2 1.59.61l1.08-1.03c-.75-.69-1.62-1.05-2.62-1.05H9c-1.09 0-2.03.41-2.81 1.19C5.41 12.97 5 13.91 5 15s.41 2.03 1.19 2.81C6.97 18.59 7.91 19 9 19c1.16 0 2.09-.37 2.79-1.09c.71-.72 1.05-1.66 1.05-2.82c0-.28-.01-.48-.04-.59H9z" fill="#fff"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>
                    </span>
                    <p>Google Map</p>
                </a>
                <!--<a target="_blank" href="viber://pa?chatURI=areama" class="messanger viber">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M444 49.9C431.3 38.2 379.9.9 265.3.4c0 0-135.1-8.1-200.9 52.3C27.8 89.3 14.9 143 13.5 209.5c-1.4 66.5-3.1 191.1 117 224.9h.1l-.1 51.6s-.8 20.9 13 25.1c16.6 5.2 26.4-10.7 42.3-27.8 8.7-9.4 20.7-23.2 29.8-33.7 82.2 6.9 145.3-8.9 152.5-11.2 16.6-5.4 110.5-17.4 125.7-142 15.8-128.6-7.6-209.8-49.8-246.5zM457.9 287c-12.9 104-89 110.6-103 115.1-6 1.9-61.5 15.7-131.2 11.2 0 0-52 62.7-68.2 79-5.3 5.3-11.1 4.8-11-5.7 0-6.9.4-85.7.4-85.7-.1 0-.1 0 0 0-101.8-28.2-95.8-134.3-94.7-189.8 1.1-55.5 11.6-101 42.6-131.6 55.7-50.5 170.4-43 170.4-43 96.9.4 143.3 29.6 154.1 39.4 35.7 30.6 53.9 103.8 40.6 211.1zm-139-80.8c.4 8.6-12.5 9.2-12.9.6-1.1-22-11.4-32.7-32.6-33.9-8.6-.5-7.8-13.4.7-12.9 27.9 1.5 43.4 17.5 44.8 46.2zm20.3 11.3c1-42.4-25.5-75.6-75.8-79.3-8.5-.6-7.6-13.5.9-12.9 58 4.2 88.9 44.1 87.8 92.5-.1 8.6-13.1 8.2-12.9-.3zm47 13.4c.1 8.6-12.9 8.7-12.9.1-.6-81.5-54.9-125.9-120.8-126.4-8.5-.1-8.5-12.9 0-12.9 73.7.5 133 51.4 133.7 139.2zM374.9 329v.2c-10.8 19-31 40-51.8 33.3l-.2-.3c-21.1-5.9-70.8-31.5-102.2-56.5-16.2-12.8-31-27.9-42.4-42.4-10.3-12.9-20.7-28.2-30.8-46.6-21.3-38.5-26-55.7-26-55.7-6.7-20.8 14.2-41 33.3-51.8h.2c9.2-4.8 18-3.2 23.9 3.9 0 0 12.4 14.8 17.7 22.1 5 6.8 11.7 17.7 15.2 23.8 6.1 10.9 2.3 22-3.7 26.6l-12 9.6c-6.1 4.9-5.3 14-5.3 14s17.8 67.3 84.3 84.3c0 0 9.1.8 14-5.3l9.6-12c4.6-6 15.7-9.8 26.6-3.7 14.7 8.3 33.4 21.2 45.8 32.9 7 5.7 8.6 14.4 3.8 23.6z"></path>
                        </svg>
                    </span>
                    <p>Viber</p>
                </a>-->
                <!--<a target="_blank" href="https://join.skype.com/bot/80924817-9809-4b5a-8941-8474cbd414" class="messanger skype">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z"></path>
                        </svg>
                    </span>
                    <p>Skype</p>
                </a>-->
                <a target="_blank" href="mailto:info@learncomputer.in" class="messanger email">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z"></path>
                        </svg>
                    </span>
                    <p>Send an email</p>
                </a>
                <a target="_blank" href="https:www.learncomputer.in#wpcf7-f7-o1" class="messanger conact">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path fill="currentColor" d="M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z" ></path>
                        </svg>
                    </span>
                    <p>Message to contact form</p>
                </a>
                <div class="messanger call-back">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path>
                        </svg>
                    </span>
                    <p>Make a Call</p>
                </div>
            </div>
            <div class="lcacontactus-message-button">
                <div class="static">
                    <img src="./assets/img/chat/msg.svg" alt="Contact us">
                    <!-- <p>Contact us</p> -->
                </div>
                <div class="callback-state">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path>
                    </svg>
                </div>
                <div class="icons">
                    <div class="icons-line">
                        <span></span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="currentColor" d="M224 32C15.9 32-77.5 278 84.6 400.6V480l75.7-42c142.2 39.8 285.4-59.9 285.4-198.7C445.8 124.8 346.5 32 224 32zm23.4 278.1L190 250.5 79.6 311.6l121.1-128.5 57.4 59.6 110.4-61.1-121.1 128.5z"></path>
                            </svg>
                        </span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="0.63em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" fill="#0054D1"/><rect x="0" y="0" width="320" height="512" fill="rgba(0, 0, 0, 0)" /></svg>
                        </span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="45" height="45" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path d="M544 960q-124 0-233-60L0 1024l124-311Q64 604 64 480q0-98 38-186.5t102.5-153T357.5 38T544 0t186.5 38t153 102.5t102.5 153t38 186.5t-38 186.5t-102.5 153t-153 102.5T544 960zm160-384h-64l-36 32q-45-12-110.5-77.5T416 420l32-36v-64q0-17-12-34t-26.5-24.5T389 260l-47 47q-39 39-11.5 121.5t105 160t160 105T717 682l47-47q6-6-1.5-20.5T738 588t-34-12z" fill="#0054D1"/><rect x="0" y="0" width="1024" height="1024" fill="rgba(0, 0, 0, 0)" /></svg>
                        </span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="45" height="45" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 2c3.31 0 6 2.66 6 5.95C18 12.41 12 19 12 19S6 12.41 6 7.95C6 4.66 8.69 2 12 2m0 4a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m8 13c0 2.21-3.58 4-8 4s-8-1.79-8-4c0-1.29 1.22-2.44 3.11-3.17l.64.91C6.67 17.19 6 17.81 6 18.5c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5c0-.69-.67-1.31-1.75-1.76l.64-.91C18.78 16.56 20 17.71 20 19z" fill="#0054D1"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>
                        </span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3S645.3 585.4 645.3 512S585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165c-3.1-64-17.7-120.8-64.5-167.6c-46.9-46.9-103.6-61.4-167.6-64.5c-55.2-3.1-109.9-2.6-165-2.6c-55.2 0-109.9-.5-165 2.6c-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6c46.9 46.9 103.6 61.4 167.6 64.5c55.2 3.1 109.9 2.6 165 2.6c55.2 0 109.9.5 165-2.6c64-3.1 120.8-17.7 167.6-64.5c46.9-46.9 61.4-103.6 64.5-167.6c3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9S717.1 398.5 717.1 512S625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9s47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z" fill="#0054D1"/><rect x="0" y="0" width="1024" height="1024" fill="rgba(0, 0, 0, 0)" /></svg>
                        </span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <path fill="currentColor" d="M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"></path>
                            </svg>
                        </span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path>
                            </svg>
                        </span>
                    </div>
                </div>
                <div class="lcacontactus-close">
                    <img src="./assets/img/chat/close.svg" alt="Close">
                </div>
                <div class="pulsation"></div>
                <div class="pulsation"></div>
            </div>
        </div>`;
document.body.appendChild(lcaCustomContact);



function lcaContactUs() {
    $('#lcacontactus-widget .lcacontactus-message-button').on('mousedown', function (e) {
        lcaContactUs.x = e.pageX;
        lcaContactUs.y = e.pageY;
    }).on('mouseup', function (e) {
        if (e.pageX === lcaContactUs.x && e.pageY === lcaContactUs.y) {
            if (!$('#lcacontactus-widget .callback-countdown-block').hasClass('display-flex')) {
                $('#lcacontactus-widget .messangers-block, #lcacontactus-widget .lcacontactus-close').toggleClass('show-messageners-block');
                $('#lcacontactus-widget .icons, #lcacontactus-widget .static').toggleClass('hide');
                $('#lcacontactus-widget .pulsation').toggleClass('stop');
            }
            e.preventDefault();
        }
    });
    $(document).on('click', function (e) {
        if (!$(e.target).is('#lcacontactus-widget, #lcacontactus-widget *')) {
            if ($('#lcacontactus-widget .messangers-block').hasClass('show-messageners-block')) {
                $('#lcacontactus-widget .messangers-block, #lcacontactus-widget .lcacontactus-close').toggleClass('show-messageners-block');
                $('#lcacontactus-widget .icons, #lcacontactus-widget .static').toggleClass('hide');
                $('#lcacontactus-widget .pulsation').toggleClass('stop');
            }
        }
    });
    
    $("#lcacontactus-widget").draggable();
   
    $('#widget-form').on('submit', function (event) {
        event.preventDefault();
        if (lcaContactUs.secs) {
            lcaContactUs.callBackCountDownMethod();
        }
        $('.callback-countdown-block-phone').addClass('ar-loading');
        if (lcaContactUs.reCaptcha) {
            grecaptcha.execute(lcaContactUs.reCaptchaKey, {
                action: lcaContactUs.reCaptchaAction
            }).then(function (token) {
                $('#ar-g-token').val(token);
                lcaContactUs.sendCallbackRequest();
            });
        } else {
            lcaContactUs.sendCallbackRequest();
        }
    });
    $('#lcacontactus-widget .call-back').on('click', function () {
        $('#lcacontactus-widget').toggleClass('opened');
        $('#lcacontactus-widget .messangers-block, #lcacontactus-widget .lcacontactus-close').toggleClass('show-messageners-block');
        $('#lcacontactus-widget .pulsation').toggleClass('stop');
        $('#lcacontactus-widget .callback-countdown-block, ' +
            '#lcacontactus-widget .callback-countdown-block-phone, ' +
            '#lcacontactus-widget .callback-state').toggleClass('display-flex');
    });
    $('#lcacontactus-widget .callback-countdown-block-close').on('click', function () {
        if (lcaContactUs.countdown != null) {
            clearInterval(lcaContactUs.countdown);
            lcaContactUs.countdown = null;
        }
        $('.callback-countdown-block, .callback-state, .callback-countdown-block > .display-flex').removeClass('display-flex');
        $('#lcacontactus-widget').removeClass('opened');
        $('#lcacontactus-widget .icons, #lcacontactus-widget .static').toggleClass('hide');
    });
    $('#lcacontactus-widget').addClass('active');
}


window.addEventListener('load', function () {
    lcaContactUs();
});