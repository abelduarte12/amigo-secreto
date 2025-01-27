// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.ariaValueMax.trim();

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




