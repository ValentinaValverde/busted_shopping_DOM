'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const inputItems = document.querySelectorAll('.input');
    const listElement = document.createElement('ul');
    console.log('Content Loaded');
    const myList = document.querySelector('#myList');

    generateList.addEventListener('click', function () {

        inputItems.forEach(function (inputItems) {
            const listItem = document.createElement('li');
            listItem.innerText = inputItems.value;
            listElement.append(listItem);
            console.log(listItem);
        });
        myList.appendChild(listElement);
    });
});
