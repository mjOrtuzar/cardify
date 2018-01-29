$.fn.cardify = function() {
  $(this).find('img').wrap('<figure></figure>');
  $(this).find('figure').append('<figcaption style="visibility: visible;"></figcaption>');

  $.each($(this).find('img'), function(i, pkm) {
    const altPos = $(this).attr('alt').indexOf(' ');
    $(this).siblings('figcaption').text(pkm['alt'].slice(0, altPos));
  });

  $(this).find('figure img').hover(getin);

  function getin() {
    const basePkm = $(this).attr('src');
    const evoPkm = $(this).data('evo');
    $(this).attr('src', evoPkm);
    $(this).data('evo', basePkm);
    const altPos = $(this).attr('alt').indexOf(' ');
    $(this).siblings('figcaption').text($(this).attr('alt').slice(altPos, $(this).attr('alt').length));
  }
};

$('section').cardify();
