'use strict'

const images = [
    { 'id': '1', 'url': './img/Cyberpunk2077.jpg'},
    { 'id': '2', 'url': './img/DevilMayCry5.jpg'},
    { 'id': '3', 'url': './img/QuantumBreak.jpg'},
    { 'id': '4', 'url': './img/ShadowOfTheTombraider.jpg'},
    { 'id': '5', 'url': './img/TheWitcher3.jpg'},
    { 'id': '6', 'url': './img/WatchDogs2.jpg'},
    { 'id': '7', 'url': './img/GearsOfWar3.jpg'},
    { 'id': '8', 'url': './img/RedDeadRedemption2.jpg'},
    { 'id': '9', 'url': './img/SunsetOverdrive.jpg'}
]

const containerItems = document.querySelector('#container-items');

const loadimages = (images, container) => {
    images.forEach (image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}


loadimages(images, containerItems);

let items = document.querySelectorAll('.item');

const previous = () => {
   containerItems.appendChild(items[0])
   items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem =items[items.length -1];
    containerItems.insertBefore( lastItem, items[0]);
    items = document.querySelectorAll('.item');
 } 

document.querySelector('#previous').addEventListener('click', previous)
document.querySelector('#next').addEventListener('click', next)