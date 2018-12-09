const urlUser = "https://hackersarena-224603.appspot.com/users/";
let uu = "Franco1010"

 function obtenerDatosUsuario(){
 fetch(urlUser.concat(uu))
 .then((resp) => resp.json() )
 .then(function(data) {
   let user;
   user = data.data;
  // console.log(user);
   userName.innerHTML = `${user.name}`;
   userAlias.innerHTML = `${user.alias}`;
   userAliasA.innerHTML = userAlias.innerHTML;
   userUniversity.innerHTML = `${user.university}`;
   userCountry.innerHTML = `${user.country}`;
   userPoints.innerHTML = `${user.score}`;
   userResolved.innerHTML = `${user.score}`;
   userTrd.innerHTML = userResolved.innerHTML;
   return;
 })
 .catch(function(error) {
   console.log(error)
 });
}
