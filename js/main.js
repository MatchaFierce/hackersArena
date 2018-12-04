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
