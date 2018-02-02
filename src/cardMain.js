//const $ = require('jQuery'); // quitar // para hacer el test.
$(document).ready(function() { // se llama al plugin
  $('section').cardify({});
});


(function($) {
  $.fn.cardify = function() {
    // envuelve
    $(this).find('img').wrap('<figure></figure>');
    $(this).find('figure').append('<figcaption></figcaption>');
    // mousein mouseof
    $.each($(this).find('img'), function(i, img) {
      const altPos = $(this).attr('alt').indexOf(' ');
      $(this).siblings('figcaption').text(img['alt'].slice(0, altPos));
    });
  
    $('figure img').mouseover(function() {
      const pic1 = $(this).attr('src');
      const pic2 = $(this).data('cardify');
      $(this).attr('src', pic2);
      $(this).data('cardify', pic1);
      let altPos = $(this).attr('alt').indexOf(' ');
      $(this).siblings('figcaption').text($(this).attr('alt').slice(altPos, $(this).attr('alt').length));

      $(this).mouseleave(function() {
        $(this).attr('src', pic1);
        $(this).data('cardify', pic2);
        let altPos = $(this).attr('alt').indexOf(' ');
        $(this).siblings('figcaption').text($(this).attr('alt').slice(0, altPos));
      });
    });
  };
})($);

const cardiImg = {};

cardiImg.extension = function() {
  const image = $('img');
  const archive = $('img').attr('src');
  const eachFile = $(image).each(function() {
    const extensiones = archive.substring(archive.lastIndexOf('.'));
    if (extensiones !== '.jpg' & extensiones !== '.png' & extensiones !== '.gif') {
      // extension invalida
      return false;
    } else {
      // extension valida
      return true;
    }
  });
};
cardiImg.extension(); // funcion que  ejecuta la funcion extension para validar.

// alt
cardiImg.alt = function() {
  const image = $('img');
  const attrbte = $('img').attr('img');
  const eachFile = $(image).each(function() {
    if (attrbte === '') {
      // no hay alt
      console.log('no hay alt');
    } else {
      // si hay alt
      console.log('si hay alt');
    }
  });
};
cardiImg.alt(); // funcion que ejecuta la funcion alt para validar.

let cardifyAlt = {};
cardifyAlt.extension = function() {
  if ($('img').attr('alt').indexOf(' ') !== -1 && $('img').attr('alt').indexOf(' ') !== 0 && $('img').attr('alt').indexOf(' ') !== $('img').attr('alt').length - 1) {
    return true;
  } else {
    return false;
  }
};

module.exports = cardifyAlt;