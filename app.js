// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    // Validar que el campo no esté vacío
    if(nombreAmigo === ''){
        alert('Debes ingresar un nombre');
        return;
    }

    // Validar que el nombre no se repita
    if(amigos.includes(nombreAmigo)){
        alert('El amigo ya fue agregado');
        return;
    }

    //Agregar el nombre al array de amigos
    amigos.push(nombreAmigo);

    //Limpiar el campo de entrada
    inputAmigo.ariaValu = "";

    //Actualizar la lista en el HTML
    actualizarLista();

}

//función para actualizar la lista de amigos en el HTML
function actualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    for(let i = 0; i < amigos.length; i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }

    
}

//función para buscar un amigo en la lista de amigos
function sortearAmigo(){

    if(amigos.length === 0){
        alert("No hay amigos disponibles para sortear");
        return;
    }
// generar de formar aleatoria
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

// obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

//Mostrar el resultado en el HTML
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `amigo sorteado: ${amigoSorteado}`;
}

