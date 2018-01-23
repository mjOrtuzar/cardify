$.fn.cardify = function() {
  $(this).find('img').wrap('<figure></figure>');
  $('figure').append('<figcaption></figcaption>');

  $('figure img').mouseover(function() {
    const basePkm = $(this).attr('src');
    const evoPkm = $(this).data('evo');
    $(this).attr('src', evoPkm);
    $(this).data('evo', basePkm);
    let altPos = $(this).attr('alt').indexOf(' ');
    $(this).siblings('figcaption').text($(this).attr('alt').slice(altPos, $(this).attr('alt').length));

    $(this).mouseleave(function() {
      $(this).attr('src', basePkm);
      $(this).data('evo', evoPkm);
      let altPos = $(this).attr('alt').indexOf(' ');
      $(this).siblings('figcaption').text($(this).attr('alt').slice(0, altPos));
    });
  });
};
