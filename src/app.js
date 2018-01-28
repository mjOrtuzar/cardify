const $ = require('jQuery');

(function ($){
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
    
}($)

$('section').cardify();
    /*por probar*/
    /*extension*/
 const cardiImg ={};

    cardiImg.extension =function(img){
      const image = $("img");
      const archive = $("img").attr('src');
      const eachFile = $(image).each(function(){
        const extensiones = archive.substring(archive.lastIndexOf('.'));
        if (extensiones != '.jpg' & extensiones != '.png' & extensiones != '.gif'){
          //extension invalida
        }else{
          //extension valida
        }
      });
    }
    //cardiImg.extension(img); //funcion que  ejecuta la funcion extension.

    /*alt*/
    cardiImg.alt =function(alt){
      const image = $("img");
      const attrbte = $("img").attr("alt");
      const eachFile = $(image).each(function(){
        if(attrbte ==""){
          //no hay alt
        }else{
          //si hay alt
        }
      });
    }
    //cardiImg.alt(img);

  module.exports = cardiImg
