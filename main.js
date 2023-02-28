'use strict';

// Riferimenti HTML
const ulElementWhile = document.getElementById('grocery-list-while');
const ulElementDoWhile = document.getElementById('grocery-list-dowhile');
const ulElementFor = document.getElementById('grocery-list-for');

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


// DO WHILE------------------------------------

// Creo l'indice del ciclo
let DoWhileIndex = 0;

do {
      // Creo un li
      const listItem = document.createElement('li');
      // Gli scrivo dentro il corrispondente elemento 
      listItem.innerHTML = groceryList[DoWhileIndex];
      // Lo aggiungo alla lista
      ulElementDoWhile.appendChild(listItem);
      // Aumento l'index di 1
      DoWhileIndex += 1;  
} while (DoWhileIndex < groceryList.length);

// DO WHILE------------------------------------

// FOR-----------------------------------------

// Creo l'indice del ciclo

for (let i = 0; i < groceryList.length; i++) {
          // Creo un li
          const listItem = document.createElement('li');
          // Gli scrivo dentro il corrispondente elemento 
          listItem.innerHTML = groceryList[i];
          // Lo aggiungo alla lista
          ulElementFor.appendChild(listItem);
}

// FOR-----------------------------------------



