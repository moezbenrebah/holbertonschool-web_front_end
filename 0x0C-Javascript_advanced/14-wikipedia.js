'use strict';

function createElement(data) {
    let para = document.createElement('P');
    let text = document.createTextNode('data');
    para.appendChild(text);
    document.body.appendChild(para);
}

function queryWikipedia(callback) {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*');
    xhr.send();
}
queryWikipedia(createElement);