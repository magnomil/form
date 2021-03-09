/*it is about a program to count 
the number of characters typed 
and simulating a successful registration.*/


/*window.addEnvetListerner significa que a 
que o script.js será carregado após o html ser.
isso significa uma boa prática. 
Além disso, load significa que deva carregar, e 
start significa que é uma função. Mas sem parênteses significa que ela
não está carregada.
english version: window.addEnvetListerner means that the
that the script.js will be loaded after the html is.
it means good practice.
In addition, load means that you must load, and
start means that it is a function. But without parentheses it means that it
is not loaded.*/

window.addEventListener('load', start);
//addEventListener é o comando principal para definir eventos.
// addEventListener is the main command for defining events.

function start() {
    console.log('Página totalmente carregada');
    //#(hashtag) antes do nameInput singnifica que é um id.
    // # (hashtag) before nameInput means that it is an id.
    var nameInput = document.querySelector('#nameInput');
    nameInput.addEventListener('keyup', countName);
    //keyup é o nome dado a um evento que ocorreu.
    // keyup is the name given to an event that has occurred.
    var form = document.querySelector('form');
    form.addEventListener('submit', preventSubmit);
}

function countName(event) {
    var count = event.target.value;

    var span = document.querySelector('#nameLength');
    span.textContent = count.length;
}

function preventSubmit(event) {
    event.preventDefault();

    var nameInput = document.querySelector('#nameInput');
    alert(nameInput.value + ' registered successfully!');
}