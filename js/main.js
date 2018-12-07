function createNode(element) {
  return document.createElement(element);
}

function obtenerDatos(){
 fetch("https://randomuser.me/api/?results=1")
 .then((resp) => resp.json())
 .then(function(data) {
   let users = data.results;
   return users.map(function(user){
     //let name = createNode('span');
     console.log(users);
     userPic.src = user.picture.large;
     userName.innerHTML = `${user.name.first}`;
     userAliasA.innerHTML = `${user.login.username}`;
     userAlias.innerHTML = `${user.login.username}`;
     userUniversity.innerHTML = `${user.location.city}`;
     userCountry.innerHTML = `${user.location.state}`;
     console.log(user.name.first);
     console.log(userName);
     return;
   })
 })
 .catch(function(error) {
   console.log(error)
 });
}
