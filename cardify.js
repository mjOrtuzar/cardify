$.fn.cardify = function() {
  $(this).find('img').wrap('<figure style="position: relative; text-align: center;"></figure>');
  $('figure').append('<figcaption style="position: absolute; font-size: 20px; color: white; text-shadow: 2px 2px black; top: 0; width: 100%; vertical-align: middle;"></figcaption>');

  $('figure img').mouseover(function() {
    $(this).siblings('figcaption').text($(this).attr('alt'));
    $(this).siblings('figcaption').css('margin', this.clientHeight / 2 + 'px 0');
    $(this).css('filter', 'blur(5px)');
  });
  $('figure').mouseleave(function() {
    $(this).find('img').siblings('figcaption').text('');
    $(this).find('img').css('filter', 'blur(0px)');
  });
};