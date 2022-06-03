'use strict';

const images = [
    { 'id': '1', 'url':'https://github.com/fernandoleonid/mini-projetos-js/blob/master/03-slideshow/img/chrono.jpg?raw=true' },
    { 'id': '2', 'url':'https://github.com/fernandoleonid/mini-projetos-js/blob/master/03-slideshow/img/inuyasha.jpg?raw=true' },
    { 'id': '3', 'url':'https://github.com/fernandoleonid/mini-projetos-js/blob/master/03-slideshow/img/ippo.png?raw=true' },
    { 'id': '4', 'url':'https://github.com/fernandoleonid/mini-projetos-js/blob/master/03-slideshow/img/tenchi.jpg?raw=true' },
    { 'id': '5', 'url':'https://github.com/fernandoleonid/mini-projetos-js/blob/master/03-slideshow/img/tenjhotenge.jpg?raw=true' },
    { 'id': '6', 'url':'https://github.com/fernandoleonid/mini-projetos-js/blob/master/03-slideshow/img/yuyuhakusho.jpg?raw=true' },
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);