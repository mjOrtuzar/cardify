$(document).ready(function() { // se llama al plugin
  $('#pkmn').cardify();
});

(function($) {
  $.fn.cardify = function() {
    // envuelve
    function wrapping() {
      $('img').wrap('<figure></figure>');
      $('figure').append('<figcaption></figcaption>');
    };
    wrapping();
    // mousein mouseof
    function changes() {
      let fig = $('figure img');
      fig.each(function() {
        /* Stuff to do when the mouse enters the element */
        $(this).mouseover(function() {
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
      });
    }changes();
  };
})($);

const cardiImg ={};

    cardiImg.extension =function(img) {
      const image = $("img");
      const archive = $("img").attr('src');
      const eachFile = $(image).each(function() {
        const extensiones = archive.substring(archive.lastIndexOf('.'));
        if (extensiones != '.jpg' & extensiones != '.png' & extensiones != '.gif') {
          // extension invalida
          
        } else {
          // extension valida
        }
      });
    }
    cardiImg.extension(img); //funcion que  ejecuta la funcion extension para validar.

    //alt
    cardiImg.alt =function(alt){
      const image = $("img");
      const attrbte = $("img").attr("alt");
      const eachFile = $(image).each(function(){
        if(attrbte ==""){
          // no hay alt
          console.log('no hay alt');
        }else{
          // si hay alt
          console.log('si hay alt');
        }
      });
    }
    cardiImg.alt(img); //funcion que ejecuta la funcion alt para validar.

    
    cardiImg.extension = function() {
      if ($('img').attr('alt').indexOf(' ') !== -1 && $('img').attr('alt').indexOf(' ') !== 0 && $('img').attr('alt').indexOf(' ') !== $('img').attr('alt').length - 1) {
       return true;
      } else {
       return false;
      }
    };

    cardiImg.extension(img); //funcion que ejecuta la funcion alt para validar espacios

  module.exports = cardiImg      
