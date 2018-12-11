const urlUser = 'https://hackersarena-224603.appspot.com/users/';
const uu = 'Franco1010';

function sortByScore(users) {
  const users2 = users;
  users2.sort((a, b) => b.score - a.score);
}

function getPos(us) {
  let pos;
  fetch('https://hackersarena-224603.appspot.com/users')
    .then(resp => resp.json())
    .then((data) => {
      const users = data.data;
      return users.map((user) => {
        sortByScore(user);
        for (let i = 0; i < user.length; i++) {
          if (user[i].alias == us) {
            userCls.innerHTML = i + 1;
            break;
          }
        }
        return pos + 1;
      })
    });
}

function getAPR (solved,tried) {
  if (solved != 0) {
    return (solved * 100) / tried;
  }
  return 0;
}

function obtenerDatosUsuario() {
  fetch(urlUser.concat(uu))
    .then(resp => resp.json())
    .then((data) => {
      const user = data.data;
      userName.innerHTML = `${user.name}`;
      userAlias.innerHTML = `${user.alias}`;
      userAliasA.innerHTML = userAlias.innerHTML;
      userUniversity.innerHTML = `${user.university}`;
      userCountry.innerHTML = `${user.country}`;
      userPoints.innerHTML = `${user.score}`;
      userResolved.innerHTML = `${user.solved}`;
      userCls.innerHTML = `${getPos(user.alias)}`;
      userSlv.innerHTML = userResolved.innerHTML;
      userApr.innerHTML = `${getAPR(user.solved, user.tried)}`;
      userTrd.innerHTML = `${user.tried}`;
      return;
    })
    .catch((error) => {
      console.log(error)
    });
}
