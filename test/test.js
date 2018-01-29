const $ = require('jquery');
const jsdom = require('jsdom');

test('img attr must not be empty', () => {
  document.body.innerHTML =
  '<section>' +
  ' <img src="../assets/images/basic-pokes/sandshrew.png" data-evo="../assets/images/evo-pokes/sandslash.png" alt="Sandshrew Sandslash">' + 
  '</section';
  
  expect($('img').attr('alt').length).not.toBe(0);
});