import { loader } from "./loader";
import { masonry } from "./masonry";
import { slider } from "./slider";

var classicLayout = false;
var portfolioKeyword, portfolioActive;
window.isAnimating = false;
var inAnimation, outAnimation;
export const page = {
  initialize: () => {
    masonry.initialize();

    if ($('html').hasClass('one-page-layout')) {

      portfolioKeyword = $('section.portfolio').attr('id');
      page.animate();

      var pagesCount = $('.wrapper > section').length;
      var isIE11 = !!navigator.userAgent.match(/Trident\/7\./);
      classicLayout = $('html').attr('data-classic-layout') === 'true';
      classicLayout = classicLayout || ($('html').attr('data-mobile-only-classic-layout') === 'true' && $(window).width() < 768);
      classicLayout = classicLayout || !Modernizr.csstransforms3d || pagesCount < 3 || isIE11;
      if (classicLayout) {
        $('html').addClass('classic-layout');
        page.setActivePage();
        setTimeout(masonry.setup, 600);
        $.address.change(function () {
          page.setActivePage();

          setTimeout(masonry.setup, 100);
        });
      }
      $.initTripleLayout();
      setTimeout(masonry.refresh, 300);

      $.address.change(function () {
        var detailUrl = page.giveDetailUrl();
        if (detailUrl != -1) {
          page.showProjectDetails(detailUrl);
        } else {
          if ($.address.path().indexOf("/" + portfolioKeyword) != -1) {
            page.hideProjectDetails(true, false);
          }
        }
      });

      $(".one-page-layout a.ajax").live("click", function () {
        var url = $(this).attr("href");
        var baseUrl = $.address.baseURL();
        if (url.indexOf(baseUrl) !== -1) {
          detailUrl = url.slice(baseUrl.length + 1);
          $.address.path("/" + detailUrl);
        } else {
          $.address.path(portfolioKeyword + "/" + url.replace(".html", ""));
        }
        return false;
      });

      page.setup();
    }
  },

  animate: () => {
    inAnimation = $('html').attr('data-inAnimation');
    outAnimation = $('html').attr('data-outAnimation');
  },

  showProjectDetails: url => {
    loader.show();
    if (!url.includes(".html")) url += ".html";

    var portfolio = $('.p-overlay:not(.active)').first();
    portfolioActive = $('.p-overlay.active');

    if (portfolioActive.length) {
      page.hideProjectDetails();
    }

    portfolio.empty().load(`/${portfolioKeyword}/${url} .portfolio-single`, function () {
      loader.show();

      portfolio.imagesLoaded(function () {

        loader.hide();

        $('html').addClass('p-overlay-on');

        $("body").scrollTop(0);

        page.setup();

        if (Modernizr.csstransforms && Modernizr.csstransforms3d) {
          portfolio.removeClass('animated ' + outAnimation + " " + inAnimation).addClass('animated ' + inAnimation).show();
        } else {
          portfolio.fadeIn();
        }
        portfolio.addClass('active');

      });
    });
  },

  setup: () => {
    masonry.setup();

    if ($('.prettyprint').length) {
      window.prettyPrint && prettyPrint();
    }

    $('.tabs').each(function () {
      if (!$(this).find('.tab-titles li a.active').length) {
        $(this).find('.tab-titles li:first-child a').addClass('active');
        $(this).find('.tab-content > div:first-child').show();
      } else {
        $(this).find('.tab-content > div').eq($(this).find('.tab-titles li a.active').parent().index()).show();
      }
    });

    $('.tabs .tab-titles li a').click(function () {
      if ($(this).hasClass('active')) { return; }
      $(this).parent().siblings().find('a').removeClass('active');
      $(this).addClass('active');
      $(this).parents('.tabs').find('.tab-content > div').hide().eq($(this).parent().index()).show();
      return false;
    });

    var toggleSpeed = 300;
    $('.toggle h4.active + .toggle-content').show();

    $('.toggle h4').click(function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).next('.toggle-content').stop(true, true).slideUp(toggleSpeed);
      } else {

        $(this).addClass('active');
        $(this).next('.toggle-content').stop(true, true).slideDown(toggleSpeed);

        if ($(this).parents('.toggle-group').hasClass('accordion')) {
          $(this).parent().siblings().find('h4').removeClass('active');
          $(this).parent().siblings().find('.toggle-content').stop(true, true).slideUp(toggleSpeed);
        }

      }
      return false;
    });
    if ($('.media-wrap, .portfolio-single').length) {
      $(".media-wrap, .portfolio-single").fitVids();
    }
    $("select:not([multiple]), input:checkbox, input:radio, input:file").uniform();
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1;
    var isWindowsPhone = ua.indexOf("windows phone") > -1;
    if (isAndroid) {
      $('html').addClass('android');
    }
    if (!isWindowsPhone) {
      FastClick.attach(document.body);
    }

    slider.initialize();
  },

  hideProjectDetails: (forever, safeClose) => {
    $("body").scrollTop(0);
    $('html').removeClass('p-overlay-on');

    if (forever) {
      portfolioActive = $('.p-overlay.active');
      if (!safeClose) {
        $.address.path(portfolioKeyword);
        $("body").scrollTop(0);
      }
    }

    portfolioActive.removeClass('active');

    if (Modernizr.csstransforms && Modernizr.csstransforms3d) { // modern browser
      portfolioActive.removeClass('animated ' + inAnimation).addClass('animated ' + outAnimation);
      setTimeout(function () { portfolioActive.hide().removeClass(outAnimation).empty(); }, 1010)
    } else {
      portfolioActive.fadeOut().empty();
    }
  },

  giveDetailUrl: () => {
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

  setActivePage: () => {
    $('.page').removeClass('active').hide();
    var path = $.address.path();
    path = path.slice(1, path.length);
    path = page.giveDetailUrl() != -1 ? portfolioKeyword : path;
    if (path == "") {
      var firstPage = $('.vs-nav li').first().find('a').attr('href');
      if (firstPage) {
        path = firstPage.slice(2, firstPage.length);
        $.address.path(path);
      }
      return false;
    }

    $('#' + path).fadeIn();
    $('.page.active').hide();
    $('#' + path).addClass('active');
    page.setCurrentMenuItem();

    if (path.indexOf(portfolioKeyword) != -1) {
      masonry.setup();
    }

    $("body").scrollTop(0);
  },

  setCurrentMenuItem: () => {
    var activePageId = $('.page.active').attr('id');

    $('.vs-nav a[href$=' + activePageId + ']')
      .parent()
      .addClass('current_page_item')
      .siblings()
      .removeClass('current_page_item');

    page.raisePageChanged();
  },

  raisePageChanged: () => {
    var path = $.address.path();
    path = path.slice(1, path.length);
    var evt = new CustomEvent("pageChanged", { detail: path });

    window.dispatchEvent(evt);
  }
};
