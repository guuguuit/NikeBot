$(document).ready(function(){
  'use strict';

  //===== Counter Up =====//
  if ($.isFunction($.fn.counterUp)) {
    $('.counter').counterUp({
      delay: 10,
      time: 2000
    });
  }

  //===== Refresh Content =====//
  $('.refrsh-wdgt').on('click', function(){
    $(this).parent().parent().parent().find('div.wdgt-ldr').addClass('active').delay(3000).queue(function(next){
      $(this).removeClass('active');
      next();
    });
    return false;
  });

  //===== Expand Content =====//
  $('.expnd-wdgt').on('click', function(){
    $(this).parent().parent().parent().toggleClass('ful-wdgt');
    return false;
  });

  //===== Delete Content =====//
  $('.delt-wdgt').on('click', function(){
    $(this).parent().parent().parent().parent().slideUp();
    return false;
  });

  //===== LightBox =====//
  if ($.isFunction($.fn.poptrox)) {
    var foo = $('.lightbox');
    foo.poptrox({usePopupCaption: true, usePopupNav: true});
  }

  //===== Select 2 =====//
  if ($.isFunction($.fn.select2)) {
    $('select').select2({});
  }

  //===== Count Down =====//
  if ($.isFunction($.fn.downCount)) {
    $('.countdown').downCount({
      date: '12/3/2020 12:00:00',
      offset: +5
    });
  }

  //===== Custom Scrollbar =====//
  if ($.isFunction($.fn.slimScroll)) {
    $('.custom-scrollbar').slimScroll({
      height: '93%',
      color: '#ffffff',
      railColor: '#ffffff'
    });
    $('.chat-lst').slimScroll({
      height: '370px',
      color: '#000000',
      size: '5px',
    });
    $('.to-do-wrp').slimScroll({
      height: '375px',
      color: '#000000',
      size: '5px',
    });
    $('.rcnt-cmts').slimScroll({
      height: '300px',
      color: '#000000',
      size: '5px',
    });
    $('.msgs-lst,.recently-activ-proj .table-wrap').slimScroll({
      height: '354px',
      color: '#000000',
      size: '5px',
    });
    $('.nti-lst').slimScroll({
      height: '388px',
      color: '#000000',
      size: '5px',
    });    
    $('.set-bd').slimScroll({
      height: '411px',
      color: '#ffffff',
      size: '5px',
    });
  }

  //===== LightBox =====//
  if ($.isFunction($.fn.poptrox)) {
    var foo = $('.lightbox');
    foo.poptrox({usePopupCaption: true, usePopupNav: true});
  }

  //===== Vector Map =====//
  if ($.isFunction($.fn.vectorMap)) {
    $('#vc-map').vectorMap({
      map: 'usa_en',
      backgroundColor: '#ffffff',
      hoverColor: '#7fc4e5',
      selectedColor: '#7fc4e5',
      color: '#d8d8d8',
      borderColor: '#bcbcbc',
      enableZoom: true,
      showTooltip: true,
      multiSelectRegion: true,
      selectedRegions: ['AK','WA']
    });
  }

  //===== Count Down =====//
  if ($.isFunction($.fn.downCount)) {
    $('.tim-remng').downCount({
      date: '12/3/2019 12:00:00',
      offset: +5
    });
  }

  //===== Owl Carousel =====//
  if ($.isFunction($.fn.owlCarousel)) {

  }

  $('.backgroundimg1-click').on('click', function() {
    $('.side-header').addClass('hdr-bg1 hdr-bgclr');
    $('.side-header').removeClass('hdr-bg2 hdr-bg3 hdr-bg4 hdr-bg5');
  });
  $('.backgroundimg2-click').on('click', function() {
    $('.side-header').addClass('hdr-bg2 hdr-bgclr');
    $('.side-header').removeClass('hdr-bg1 hdr-bg3 hdr-bg4 hdr-bg5');
  });
  $('.backgroundimg3-click').on('click', function() {
    $('.side-header').addClass('hdr-bg3 hdr-bgclr');
    $('.side-header').removeClass('hdr-bg2 hdr-bg1 hdr-bg4 hdr-bg5');
  });
  $('.backgroundimg4-click').on('click', function() {
    $('.side-header').addClass('hdr-bg4 hdr-bgclr');
    $('.side-header').removeClass('hdr-bg2 hdr-bg3 hdr-bg1 hdr-bg5');
  });
  $('.backgroundimg5-click').on('click', function() {
    $('.side-header').addClass('hdr-bg5 hdr-bgclr');
    $('.side-header').removeClass('hdr-bg2 hdr-bg3 hdr-bg4 hdr-bg1');
  });

  
    //=== Side Menu ===//
    $('ul.drp-sec li.has-drp > a').on('click', function () {
      $(this).parent().siblings().children('ul').slideUp();
      $(this).parent().siblings().removeClass('active');
      $(this).parent().children('ul').slideToggle();
      $(this).parent().toggleClass('active');
      return false;
    });

    //=== Side Menu Option ===//
    $('.menu-trigger').on('click', function () {
      $('.side-header').toggleClass('expand-header');
      $('.panel-data').toggleClass('expand-data');
      $('.footer-style1').toggleClass('expand-footer');
      $('.menu-trigger').toggleClass('active');
      $('.side-header nav h4').slideToggle();
    });

    //===== Topbar Links =====//
    $('.tobar-links > li > a').on('click', function () {
      $(this).parent().toggleClass('active');
      return false;
    });

    //===== Options Panel =====//
    $('.panel-btn').on('click', function () {
      $('.option-panel').toggleClass('slidein');
      return false;
    });

    //===== Color Picker =====*/
    $('.color-panel span').on('click', function () {
      $('.backgroundcolor-panel span').removeClass('applied');
      $(this).addClass('applied');
      return false;
    });

    //===== Color Picker =====*/
    $('.backgroundimg-panel span').on('click', function () {
      $('.backgroundimg-panel span').removeClass('applied');
      $(this).addClass('applied');
      return false;
    });

    //===== User Drop =====//
    $('.usr-act').on('click', function () {
      $(this).toggleClass('active');
      return false;
    });
  });