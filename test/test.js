const chai = require('chai');
const jsdom = require('jsdom');
const {
  JSDOM
} = jsdom;
let dom = new JSDOM('<div><img src="ruta" data-cardify="ruta" alt="testA testB"></div>');
const {
  window
} = dom;
global.document = dom;
global.window = window;
global.navigator = {
  userAgent: 'node.js',
};

var $ = require('jquery');
const cardify = require('../src/index');
var expect = require('chai').expect;

describe('img attr alt and src should not be empty', () => {
  it('img attr alt and src are not empty', () => {
    expect($('img').attr('alt').length === 0).to.equal(false);
    expect($('img').attr('src').length === 0).to.equal(false);
    expect($('img').data('cardify').length === 0).to.equal(false);
  });
});

/*
describe('img attr alt should contain space', () => {
  it('img attr alt has space but not as the first or last character', () => {
    expect(cardify.extension()).to.equal(true)
  });
});

describe('img attr src and data should end in valid img extension', () => {
  it('img attr src and data end in .jpg, .png or .gif', () => {
    var dot = $('img').data().lastIndexOf('.');
    expect($('img').data('alt').slice(dot)).to.not.equal(0);
  });
});
*/
