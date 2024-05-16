// localStorage.clear();
let palabrita;
let cant_errores = 0;
let cant_aciertos = 0;
const palabras = [
    'manzana',
    'camiseta',
    'caramelos',
    'ñoquis',
    'streamer',
    'twitch',
    'murciegalo',
    'microfono'
];
const btn = id('jugar');
const imagen = id('imagen');
const btn_letras = querySAll('#letras button');
const firstScreen = id('firstScreen');
const nombre = id('name');
if (localStorage.getItem('nombre') === null || localStorage.getItem('palabra') === null || localStorage.getItem('imagen') === null || localStorage.getItem('spansMascara') === null){
    /*Click Iniciar Juego*/
    btn.addEventListener('click', iniciar);

    /*Click de Adivinar Letra*/
    for (let i = 0; i < btn_letras.length; i++){
        btn_letras[i].addEventListener('click', click_letras);
    }

    /*Fin del Juego*/
    game_over();
}else{
    nombre.value = localStorage.getItem('nombre');
    palabrita = localStorage.getItem('palabra');
    imagen.src = localStorage.getItem('imagen');
    btn.innerHTML = 'Recuperar';
    btn.addEventListener('click', iniciarII);
    iniciarII();
    for (let i = 0; i < btn_letras.length; i++){
        btn_letras[i].addEventListener('click', click_letras);
    }
    // game_over();
    localStorage.clear();
}






function iniciar(event) {
    firstScreen.style.display = 'none';
    localStorage.setItem('nombre', nombre.value);

    imagen.src = 'imgs/img0.png';
    
    btn.disabled = true;
    cant_errores = 0;
    cant_aciertos = 0;

    const parrafo = id('palabra_a_adivinar');
    parrafo.innerHTML = '';

    const cant_palabras = palabras.length;
    const valor_al_azar = obtener_random(0, cant_palabras);

    palabrita = palabras[valor_al_azar];
    console.log(palabrita);
    localStorage.setItem('palabra', palabrita);
    const cant_letras = palabrita.length;

    for (let i = 0; i < btn_letras.length; i++){
        btn_letras[i].disabled = false;
    }

    for (let i= 0; i < cant_letras; i++){
        const span = document.createElement('span');
        parrafo.appendChild(span);
        span.innerHTML = '_';
        localStorage.setItem('spansMascara', [span.innerHTML]);
        console.log([span.innerHTML]);
    }

}
function iniciarII(event) {
    firstScreen.style.display = 'none';
    // nombre;

    // imagen.src = 'imgs/img0.png';
    imagen;
    
    btn.disabled = true;
    cant_errores = 0;
    cant_aciertos = 0;

    const parrafo = id('palabra_a_adivinar');
    parrafo.innerHTML = '';

    const cant_palabras = palabras.length;
    const valor_al_azar = obtener_random(0, cant_palabras);

    palabrita;
    const cant_letras = palabrita.length;

    for (let i = 0; i < btn_letras.length; i++){
        btn_letras[i].disabled = false;
    }

    for (let i= 0; i < cant_letras; i++){
        const span = document.createElement('span');
        parrafo.appendChild(span);
        span.innerHTML = '_';
        localStorage.getItem('spansMascara');
        console.log([span.innerHTML]);
    }

}

function click_letras(event){
    const spans = querySAll('#palabra_a_adivinar span');
    const button = event.target;
    button.disabled = true;
    const letra = button.innerHTML.toLowerCase();
    const palabra = palabrita.toLowerCase();

    let acerto = false;
    for (let i = 0; i < palabra.length; i++) {  
        if (letra == palabra[i]) {
            spans[i].innerHTML = letra;
            cant_aciertos++;
            acerto = true;
        }
    }

    if (acerto == false){
        cant_errores++;
        const source = `imgs/img${cant_errores}.png`;
        imagen.src = source;
        localStorage.setItem('imagen', imagen.src);
    }

    if (cant_errores == 6){
        id('resultado').innerHTML = 'Perdiste, la palabra era: ' + 
        palabrita;
        game_over();
    }else if (cant_aciertos == palabrita.length){
        id('resultado').innerHTML = 'Ganaste!!!!!!!!!';
        game_over();
    }

    console.log('la letra ' + letra + ' en la palabra ' 
    + palabra + '¿existe?: ' + acerto);
}

/*Fin del Juego*/
function game_over(){
    for (let i = 0; i < btn_letras.length; i++){
        btn_letras[i].disabled = true;
    }

    btn.disabled = false;
}


