# Cardify plugin

Un _plugin_ es un conjunto de scripts que expande las capacidades y la funcionalidad de una aplicación más extensa.
Nuestro plugin para la Web App _Cardify_ permite ver al usuario el atributo `alt`sobre cada imagen en la que se haya hecho hover.


## Funcionalidad 

1. Primero el plugin selecciona todas las imagenes de una página y las reemplaza por un elemento `<figure>`

2. A su vez, inserta un elemento `<img>` dentro de `<figure>`

3. Y, por último, añade un elemento `<figcaption>` para mostrar el atributo `alt` sobre la imagen al hacer hover

## Instalación

### Global (navegador)

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="cardify.js"></script>
```

### Requerimientos Técnicos

El proyecto fue realizado con las siguientes dependencias NPM:

+ Dependencias de Desarrollo 
  - Eslint `~v.4.15.0`

+ Dependencias de Producción 
  - jQuery `~v.3.2.1`
  - Bootstrap `~v.3.3.7`


## Uso

```js
// `container` es el selector del contenedor donde se buscarán todas las
// imágenes a ser procesadas.
$(container).cardify();
```