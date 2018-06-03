/*!
 * FullCoders v1.18.0117.1 (https://www.fullcoders.com)
 * Copyright 2018 FullCoders
 * Licensed under MIT (https://gitlab.com/fullcoders/NewMyResume)
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// $(window).on('resize debouncedresize', function () {

//Variables
//-------------------
var current = 0;
var classicLayout = false;
var inClass, outClass, portfolioKeyword, pActive;
window.nextAnimation = $('html').data("next-animation");
window.prevAnimation = $('html').data("prev-animation");
window.randomize = $('html').data("random-animation");
window.isAnimating = false;
var $main = $('#main'),
    $pages = $main.children('.pt-page'),
    $menuLinks = $('.nav-menu a'),
    animcursor = 1,
    endCurrPage = false,
    endNextPage = false,
    animEndEventNames = {
    'WebkitAnimation': 'webkitAnimationEnd',
    'OAnimation': 'oAnimationEnd',
    'msAnimation': 'MSAnimationEnd',
    'animation': 'animationend'
},
    animEndEventName = animEndEventNames[Modernizr.prefixed('animation')],
    support = Modernizr.cssanimations;
//-------------------
var page = {

    initialize: function initialize() {
        if ($('html').hasClass('one-page-layout')) {

            portfolioKeyword = $('section.portfolio').attr('id');

            var detailUrl = page.giveDetailUrl();

            classicLayout = $('html').attr('data-classic-layout') === 'true';
            classicLayout = classicLayout || $('html').attr('data-mobile-classic-layout') === 'true' && $(window).width() < 1025;
            classicLayout = classicLayout || !Modernizr.cssanimations;
            if (classicLayout) {
                $('html').addClass('classic-layout');
                page.setActivePage();
                $.address.change(function () {
                    page.setActivePage();
                    $('html').removeClass('is-menu-toggled-on');
                });
            } else {
                $('html').addClass('modern-layout');
                $.address.change(function () {
                    page.setActivePage();
                    $('html').removeClass('is-menu-toggled-on');
                });
            }

            $('.nav-menu a').on("click", function () {
                if (window.isAnimating) {
                    return false;
                }
            });

            $.address.change(function () {
                var detailUrl = page.giveDetailUrl();
                if (detailUrl != -1) {
                    showProjectDetails(detailUrl);
                } else {
                    if ($.address.path().indexOf("/" + portfolioKeyword) != -1) {
                        page.hideProjectDetails(true, false);
                    }
                }
            });
        }

        $(".one-page-layout a.ajax").live('click', function () {
            var url = $(this).attr('href');
            var baseUrl = $.address.baseURL();
            if (url.indexOf(baseUrl) !== -1) {
                var total = url.length;
                detailUrl = url.slice(baseUrl.length + 1, total);
                $.address.path('/' + detailUrl);
            } else {
                detailUrl = url;
                $.address.path(portfolioKeyword + '/' + detailUrl);
            }
            return false;
        });

        function showProjectDetails(url) {
            showLoader();
            var p = $('.p-overlay:not(.active)').first();
            pActive = $('.p-overlay.active');

            p.empty().load(url + ' .portfolio-single', function () {
                NProgress.set(0.5);

                p.imagesLoaded(function () {

                    setupMasonry();
                    if (pActive.length) {
                        page.hideProjectDetails();
                    }
                    hideLoader();
                    $('html').addClass('p-overlay-on');
                    $("body").scrollTop(0);

                    setup();
                    if (classicLayout) {
                        p.show();
                    } else {
                        p.removeClass('animate-in animate-out').addClass('animate-in').show();
                    }
                    p.addClass('active');
                });
            });
        }
    },

    hideProjectDetails: function hideProjectDetails(forever, safeClose) {
        $("body").scrollTop(0);

        if (forever) {
            pActive = $('.p-overlay.active');
            $('html').removeClass('p-overlay-on');
            if (!safeClose) {
                $.address.path(portfolioKeyword);
            }
        }
        pActive.removeClass('active');
        if (classicLayout) {
            pActive.hide().empty();
        } else {
            pActive.removeClass('animate-in animate-out').addClass('animate-out').show();
            setTimeout(function () {
                pActive.hide().removeClass('animate-out').empty();
            }, 10);
        }
    },

    giveDetailUrl: function giveDetailUrl() {
        var address = $.address.value();
        var detailUrl;
        if (address.indexOf("/" + portfolioKeyword + "/") != -1 && address.length > portfolioKeyword.length + 2) {
            var total = address.length;
            detailUrl = address.slice(portfolioKeyword.length + 2, total);
        } else {
            detailUrl = -1;
        }
        return detailUrl;
    },

    setActivePage: function setActivePage() {
        var path = $.address.path();
        path = path.slice(1, path.length);
        path = page.giveDetailUrl() != -1 ? portfolioKeyword : path;
        if (path == "") {
            var firstPage = $('.nav-menu li').first().find('a').attr('href');
            path = firstPage.slice(2, firstPage.length);
            if (classicLayout) {
                $('#' + path).addClass('page-current').siblings().removeClass('page-current');
            } else {
                $('#' + path).addClass('page-current');
            }
            page.setCurrentMenuItem();

            return false;
        } else {
            if (page.giveDetailUrl() == -1) {
                if (classicLayout) {
                    $('#' + path).addClass('page-current').siblings().removeClass('page-current');
                    page.setCurrentMenuItem();
                } else {
                    if (!$('.page-current').length) {
                        $('#' + path).addClass('page-current');
                        current = $('#' + path).index();
                        page.setCurrentMenuItem();
                    } else {
                        page.nextPage($('#' + path).index());
                    }
                }
            }
        }

        // mansonry.refresh();

        // setTimeout(function () {
        //     mansonry.refresh();
        // }, 100);
    },

    nextPage: function nextPage(nextPageIndex) {

        if (nextPageIndex === current) {
            return;
        }
        var animation = nextPageIndex > current ? nextAnimation : prevAnimation;

        if (randomize) {
            if (animcursor > 67) {
                animcursor = 1;
            }
            animation = animcursor;
            ++animcursor;
        }
        if (window.isAnimating) {
            return false;
        }
        window.isAnimating = true;
        var $currPage = $pages.eq(current);
        current = nextPageIndex;
        var $nextPage = $pages.eq(current).addClass('page-current');
        switch (animation) {
            case 1:
                outClass = 'pt-page-moveToLeft';
                inClass = 'pt-page-moveFromRight';
                break;
            case 2:
                outClass = 'pt-page-moveToRight';
                inClass = 'pt-page-moveFromLeft';
                break;
            case 3:
                outClass = 'pt-page-moveToTop';
                inClass = 'pt-page-moveFromBottom';
                break;
            case 4:
                outClass = 'pt-page-moveToBottom';
                inClass = 'pt-page-moveFromTop';
                break;
            case 5:
                outClass = 'pt-page-fade';
                inClass = 'pt-page-moveFromRight pt-page-ontop';
                break;
            case 6:
                outClass = 'pt-page-fade';
                inClass = 'pt-page-moveFromLeft pt-page-ontop';
                break;
            case 7:
                outClass = 'pt-page-fade';
                inClass = 'pt-page-moveFromBottom pt-page-ontop';
                break;
            case 8:
                outClass = 'pt-page-fade';
                inClass = 'pt-page-moveFromTop pt-page-ontop';
                break;
            case 9:
                outClass = 'pt-page-moveToLeftFade';
                inClass = 'pt-page-moveFromRightFade';
                break;
            case 10:
                outClass = 'pt-page-moveToRightFade';
                inClass = 'pt-page-moveFromLeftFade';
                break;
            case 11:
                outClass = 'pt-page-moveToTopFade';
                inClass = 'pt-page-moveFromBottomFade';
                break;
            case 12:
                outClass = 'pt-page-moveToBottomFade';
                inClass = 'pt-page-moveFromTopFade';
                break;
            case 13:
                outClass = 'pt-page-moveToLeftEasing pt-page-ontop';
                inClass = 'pt-page-moveFromRight';
                break;
            case 14:
                outClass = 'pt-page-moveToRightEasing pt-page-ontop';
                inClass = 'pt-page-moveFromLeft';
                break;
            case 15:
                outClass = 'pt-page-moveToTopEasing pt-page-ontop';
                inClass = 'pt-page-moveFromBottom';
                break;
            case 16:
                outClass = 'pt-page-moveToBottomEasing pt-page-ontop';
                inClass = 'pt-page-moveFromTop';
                break;
            case 17:
                outClass = 'pt-page-scaleDown';
                inClass = 'pt-page-moveFromRight pt-page-ontop';
                break;
            case 18:
                outClass = 'pt-page-scaleDown';
                inClass = 'pt-page-moveFromLeft pt-page-ontop';
                break;
            case 19:
                outClass = 'pt-page-scaleDown';
                inClass = 'pt-page-moveFromBottom pt-page-ontop';
                break;
            case 20:
                outClass = 'pt-page-scaleDown';
                inClass = 'pt-page-moveFromTop pt-page-ontop';
                break;
            case 21:
                outClass = 'pt-page-scaleDown';
                inClass = 'pt-page-scaleUpDown pt-page-delay300';
                break;
            case 22:
                outClass = 'pt-page-scaleDownUp';
                inClass = 'pt-page-scaleUp pt-page-delay300';
                break;
            case 23:
                outClass = 'pt-page-moveToLeft pt-page-ontop';
                inClass = 'pt-page-scaleUp';
                break;
            case 24:
                outClass = 'pt-page-moveToRight pt-page-ontop';
                inClass = 'pt-page-scaleUp';
                break;
            case 25:
                outClass = 'pt-page-moveToTop pt-page-ontop';
                inClass = 'pt-page-scaleUp';
                break;
            case 26:
                outClass = 'pt-page-moveToBottom pt-page-ontop';
                inClass = 'pt-page-scaleUp';
                break;
            case 27:
                outClass = 'pt-page-scaleDownCenter';
                inClass = 'pt-page-scaleUpCenter pt-page-delay400';
                break;
            case 28:
                outClass = 'pt-page-rotateRightSideFirst';
                inClass = 'pt-page-moveFromRight pt-page-delay200 pt-page-ontop';
                break;
            case 29:
                outClass = 'pt-page-rotateLeftSideFirst';
                inClass = 'pt-page-moveFromLeft pt-page-delay200 pt-page-ontop';
                break;
            case 30:
                outClass = 'pt-page-rotateTopSideFirst';
                inClass = 'pt-page-moveFromTop pt-page-delay200 pt-page-ontop';
                break;
            case 31:
                outClass = 'pt-page-rotateBottomSideFirst';
                inClass = 'pt-page-moveFromBottom pt-page-delay200 pt-page-ontop';
                break;
            case 32:
                outClass = 'pt-page-flipOutRight';
                inClass = 'pt-page-flipInLeft pt-page-delay500';
                break;
            case 33:
                outClass = 'pt-page-flipOutLeft';
                inClass = 'pt-page-flipInRight pt-page-delay500';
                break;
            case 34:
                outClass = 'pt-page-flipOutTop';
                inClass = 'pt-page-flipInBottom pt-page-delay500';
                break;
            case 35:
                outClass = 'pt-page-flipOutBottom';
                inClass = 'pt-page-flipInTop pt-page-delay500';
                break;
            case 36:
                outClass = 'pt-page-rotateFall pt-page-ontop';
                inClass = 'pt-page-scaleUp';
                break;
            case 37:
                outClass = 'pt-page-rotateOutNewspaper';
                inClass = 'pt-page-rotateInNewspaper pt-page-delay500';
                break;
            case 38:
                outClass = 'pt-page-rotatePushLeft';
                inClass = 'pt-page-moveFromRight';
                break;
            case 39:
                outClass = 'pt-page-rotatePushRight';
                inClass = 'pt-page-moveFromLeft';
                break;
            case 40:
                outClass = 'pt-page-rotatePushTop';
                inClass = 'pt-page-moveFromBottom';
                break;
            case 41:
                outClass = 'pt-page-rotatePushBottom';
                inClass = 'pt-page-moveFromTop';
                break;
            case 42:
                outClass = 'pt-page-rotatePushLeft';
                inClass = 'pt-page-rotatePullRight pt-page-delay180';
                break;
            case 43:
                outClass = 'pt-page-rotatePushRight';
                inClass = 'pt-page-rotatePullLeft pt-page-delay180';
                break;
            case 44:
                outClass = 'pt-page-rotatePushTop';
                inClass = 'pt-page-rotatePullBottom pt-page-delay180';
                break;
            case 45:
                outClass = 'pt-page-rotatePushBottom';
                inClass = 'pt-page-rotatePullTop pt-page-delay180';
                break;
            case 46:
                outClass = 'pt-page-rotateFoldLeft';
                inClass = 'pt-page-moveFromRightFade';
                break;
            case 47:
                outClass = 'pt-page-rotateFoldRight';
                inClass = 'pt-page-moveFromLeftFade';
                break;
            case 48:
                outClass = 'pt-page-rotateFoldTop';
                inClass = 'pt-page-moveFromBottomFade';
                break;
            case 49:
                outClass = 'pt-page-rotateFoldBottom';
                inClass = 'pt-page-moveFromTopFade';
                break;
            case 50:
                outClass = 'pt-page-moveToRightFade';
                inClass = 'pt-page-rotateUnfoldLeft';
                break;
            case 51:
                outClass = 'pt-page-moveToLeftFade';
                inClass = 'pt-page-rotateUnfoldRight';
                break;
            case 52:
                outClass = 'pt-page-moveToBottomFade';
                inClass = 'pt-page-rotateUnfoldTop';
                break;
            case 53:
                outClass = 'pt-page-moveToTopFade';
                inClass = 'pt-page-rotateUnfoldBottom';
                break;
            case 54:
                outClass = 'pt-page-rotateRoomLeftOut pt-page-ontop';
                inClass = 'pt-page-rotateRoomLeftIn';
                break;
            case 55:
                outClass = 'pt-page-rotateRoomRightOut pt-page-ontop';
                inClass = 'pt-page-rotateRoomRightIn';
                break;
            case 56:
                outClass = 'pt-page-rotateRoomTopOut pt-page-ontop';
                inClass = 'pt-page-rotateRoomTopIn';
                break;
            case 57:
                outClass = 'pt-page-rotateRoomBottomOut pt-page-ontop';
                inClass = 'pt-page-rotateRoomBottomIn';
                break;
            case 58:
                outClass = 'pt-page-rotateCubeLeftOut pt-page-ontop';
                inClass = 'pt-page-rotateCubeLeftIn';
                break;
            case 59:
                outClass = 'pt-page-rotateCubeRightOut pt-page-ontop';
                inClass = 'pt-page-rotateCubeRightIn';
                break;
            case 60:
                outClass = 'pt-page-rotateCubeTopOut pt-page-ontop';
                inClass = 'pt-page-rotateCubeTopIn';
                break;
            case 61:
                outClass = 'pt-page-rotateCubeBottomOut pt-page-ontop';
                inClass = 'pt-page-rotateCubeBottomIn';
                break;
            case 62:
                outClass = 'pt-page-rotateCarouselLeftOut pt-page-ontop';
                inClass = 'pt-page-rotateCarouselLeftIn';
                break;
            case 63:
                outClass = 'pt-page-rotateCarouselRightOut pt-page-ontop';
                inClass = 'pt-page-rotateCarouselRightIn';
                break;
            case 64:
                outClass = 'pt-page-rotateCarouselTopOut pt-page-ontop';
                inClass = 'pt-page-rotateCarouselTopIn';
                break;
            case 65:
                outClass = 'pt-page-rotateCarouselBottomOut pt-page-ontop';
                inClass = 'pt-page-rotateCarouselBottomIn';
                break;
            case 66:
                outClass = 'pt-page-rotateSidesOut';
                inClass = 'pt-page-rotateSidesIn pt-page-delay200';
                break;
            case 67:
                outClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
                break;
        }
        $currPage.addClass(outClass).on(animEndEventName, function () {
            $currPage.off(animEndEventName);
            endCurrPage = true;
            if (endNextPage) {
                page.onEndAnimation($currPage, $nextPage);
            }
        });
        $nextPage.addClass(inClass).on(animEndEventName, function () {
            $nextPage.off(animEndEventName);
            endNextPage = true;
            if (endCurrPage) {
                page.onEndAnimation($currPage, $nextPage);
            }
        });
        if (!support) {
            page.onEndAnimation($currPage, $nextPage);
        }
    },

    onEndAnimation: function onEndAnimation($outpage, $inpage) {
        endCurrPage = false;
        endNextPage = false;
        page.resetPage($outpage, $inpage);
        window.isAnimating = false;
        page.setCurrentMenuItem();
    },

    resetPage: function resetPage($outpage, $inpage) {
        $outpage.removeClass(outClass);
        $inpage.removeClass(inClass);
        $pages.eq(current).siblings().removeClass('page-current');
    },

    setCurrentMenuItem: function setCurrentMenuItem() {
        var activePageId = $('.pt-page.page-current').attr('id');

        $('.nav-menu a[href$=' + activePageId + ']').parent().addClass('current_page_item').siblings().removeClass('current_page_item');

        page.raisePageChanged();
    },

    raisePageChanged: function raisePageChanged() {
        var path = $.address.path();
        path = path.slice(1, path.length);
        var evt = new CustomEvent('pageChanged', { detail: path });

        window.dispatchEvent(evt);
    }
};

exports.page = page;
