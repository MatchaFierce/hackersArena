<<<<<<< HEAD
var misCabeceras = new Headers();

var miInit = { method: 'GET',
               headers: misCabeceras,
               mode: 'cors',
               cache: 'default' };

function obtenerDatos(){
  fetch("https://hackersarena00.appspot.com/users",miInit)
  .then(function(response) {
    return response.json();
  }).then(function(respuesta) {
    var nombre = document.getElementById('nombre');
    nombre.innerHTML = response.name;
  })
}
=======

>>>>>>> aafc7923bb6ed5e71928c3316dff0b5ad7c5cc72
