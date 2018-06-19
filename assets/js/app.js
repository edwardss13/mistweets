//variables

const listaTweets = document.getElementById('lista-tweets');

//consolo log
//event Listeners
//mensajes para probar git

eventListeners();

function eventListeners(){
    //cuando se envia el formulario
    document.querySelector('#formulario').addEventListener('submit',agregarTweet);

    //Borrar Tweetes

    listaTweets.addEventListener('click',borrarTweet);

    //contenido cargado
    document.addEventListener('DOMContentLoaded', localStorageListo);



}


// funciones


//añadir tweet del formulario
function agregarTweet(e) {
    e.preventDefault();
    //leer el valor de textarea
    const tweet = document.getElementById('tweet').value;
    //crear boton de eliminar 
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';


    //crear elemento y añadirle al contenido de la lista
    const li = document.createElement('li');
    li.innerText = tweet;
    //añade el boton de borrar al tweet
    li.appendChild(botonBorrar);
    //añade el tweet a la lista
    listaTweets.appendChild(li);

    //Añadir a local Storage
    agregarTweetLocalStorage(tweet);

}
//Elimina el Tweet del DOM
function borrarTweet(e){
    e.preventDefault();
    if(e.target.className === 'borrar-tweet') {
        console.log(e.target.parentElement.remove() );
        alert('Tweet eliminado');
    }
}
//Mostrar datos de LocalStorage en la lista
function localStorageListo() {
    let tweets;

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet) {
    //leer el valor de textarea
    const tweet = document.getElementById('tweet').value;
    //crear boton de eliminar 
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';


    //crear elemento y añadirle al contenido de la lista
    const li = document.createElement('li');
    li.innerText = tweet;
    //añade el boton de borrar al tweet
    li.appendChild(botonBorrar);
    //añade el tweet a la lista
    listaTweets.appendChild(li);
         });
        
    }
  
//Agrega tweet a local storage
function agregarTweetLocalStorage(tweet) {
    let tweets;
    tweets = obtenerTweetsLocalStorage();
    //añadir el nuevo tweet
    tweets.push(tweet);
    //Convertir de string a arreglo para local storage
    localStorage.setItem('tweets', JSON.stringify(tweets) );
}

//comprobar que haya elemntos en localstorage, retorna un arrreglo
function obtenerTweetsLocalStorage(){
    let tweets;
    //Revisamos los valores de local storage
    if (localStorage.getItem('tweets') === null) {
        tweets=[];
    }else{
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}


