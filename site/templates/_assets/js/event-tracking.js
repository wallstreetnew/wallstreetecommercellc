/**
 *
 * Document Ready Functions
 *
 **/

$(document).ready(function() {

  var filetypes = /\.(zip|exe|dmg|pdf.*|doc.*|xls.*|ppt.*|mp3|txt|rar|wma|mov|avi|wmv|flv|wav)$/i;
  var baseHref = '';
  if ($('base').attr('href') != undefined) baseHref = $('base').attr('href');

  $('a').on('click', function(event) {
    var el = $(this);
    var track = true;
    var href = (typeof(el.attr('href')) != 'undefined' ) ? el.attr('href') :"";
    var isThisDomain = href.match(document.domain.split('.').reverse()[1] + '.' + document.domain.split('.').reverse()[0]);

    if (!href.match(/^javascript:/i)) {

      var elEv = []; elEv.value=0, elEv.non_i=false;

      if (href.match(/^mailto\:/i)) {
        elEv.category = "email";
        elEv.action = "click";
        elEv.label = href.replace(/^mailto\:/i, '');
        elEv.loc = href;
      }
      else if (href.match(/watch\?v=([a-zA-Z0-9\-_]+)/)) {
        elEv.category = "video";
        elEv.action = "click";
        elEv.label = href.replace(/^https?\:\/\//i, '').split("&")[0];
        elEv.loc = href;
      }
      else if (href.match(filetypes)) {
        var extension = (/[.]/.exec(href)) ? /[^.]+$/.exec(href) : undefined;
        elEv.category = "download";
        elEv.action = "click-" + extension[0].split("?")[0];
        elEv.label = href.replace(/ /g,"-").split("?")[0];
        elEv.loc = baseHref + href;
      }
      else if (href.match(/^https?\:/i) && !isThisDomain && !el.data('fancybox')) {
        elEv.category = "external";
        elEv.action = "click";
        elEv.label = href.replace(/^https?\:\/\//i, '');
        elEv.non_i = true;
        elEv.loc = href;
      }
      else if (href.match(/^https?\:/i) && !isThisDomain && el.data('fancybox')) {
        elEv.category = "fancybox";
        elEv.action = "click";
        elEv.label = href.replace(/^https?\:\/\//i, '');
        elEv.loc = href;
      }
      else if (href.match(/^tel\:/i)) {
        elEv.category = "telephone";
        elEv.action = "click";
        elEv.label = href.replace(/^tel\:/i, '');
        elEv.loc = href;
      }
      else track = false;

      if (track) {
        ga('send', 'event', elEv.category.toLowerCase(), elEv.action.toLowerCase(), elEv.label, elEv.value, elEv.non_i);

        console.log("Category: " + elEv.category.toLowerCase() + ", Action: " + elEv.action.toLowerCase() + ", Label: " + elEv.label + ", Value: " + elEv.value + ", Non-interaction: " + elEv.non_i);

        if (href.match(/watch\?v=([a-zA-Z0-9\-_]+)/) || el.data('fancybox')) {
          return true;
        }
        else if (el.attr('target') == undefined || el.attr('target').toLowerCase() != '_blank') {
          setTimeout(function() { location.href = elEv.loc; }, 4000);
          return false;
        }
      }

    }
  });

});