function obtenerDatos(){
 fetch("https://hackersarena00.appspot.com/users")
 .then(function(response) {
   return response;
 }).then(function(response) {
   //console.log(response.text());
   var data = response.json();
   console.log(data);
   nombre.innerHTML = data.promiseValue.data[0].alias;
 //  console.log(data);
   //nombre.innerHTML = data;
 });}
