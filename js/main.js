const urlUser = 'https://hackersarena-224603.appspot.com/users/';
const uu = 'Franco1010';

function obtenerDatosUsuario() {
  fetch(urlUser.concat(uu))
    .then(resp => resp.json())
    .then((data) => {
      const user = data.data;
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
    .catch((error) => {
      console.log(error)
    });
}
