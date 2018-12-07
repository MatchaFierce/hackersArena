function createNode(element) {
  return document.createElement(element);
}

function obtenerDatos(){
 fetch("https://hackersarena-224603.appspot.com/users")
 .then((resp) => resp.json() )
 .then(function(data) {
   let users;
   
   console.log(data);
   console.log(users);
   console.log(data.data);
   users = data.data;
   return users.map(function(user){
     //let name = createNode('span');
     console.log(user[0]);
     userName.innerHTML = `${user[0].name}`;
     userAliasA.innerHTML = `${user[0].alias}`;
     userAlias.innerHTML = `${user[0].alias}`;
     userUniversity.innerHTML = `${user[0].idUniversity}`;
     userCountry.innerHTML = `${user[0].idCountry}`;
     return;
   })
 })
 .catch(function(error) {
   console.log(error)
 });
}
