'use strict';

// Riferimenti HTML
const ulElementWhile = document.getElementById('grocery-list-while');

// Creo l'array con gli alimenti
const groceryList = ['Banana', 'Pane', 'Camomilla', ' Cioccolato', 'Birra'];


// WHILE------------------------------------

// Creo l'indice del ciclo
let whileIndex = 0;

// Finchè l'indice non raggiunge la lunghezza dell'array
while (whileIndex < groceryList.length) {
    // Creo un li
    const listItem = document.createElement('li');
    // Gli scrivo dentro il corrispondente elemento 
    listItem.innerHTML = groceryList[whileIndex];
    // Lo aggiungo alla lista
    ulElementWhile.appendChild(listItem);
    // Aumento l'index di 1
    whileIndex += 1;
}

// WHILE------------------------------------


