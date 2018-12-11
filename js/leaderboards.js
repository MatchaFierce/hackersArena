function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

function setFlag(idCountry) {
  let ruta;
  if (idCountry == 1) {
    ruta = '../img/flags/mx.png';
  } else if (idCountry == 2) {
    ruta = '../img/flags/us.png';
  }
  return ruta;
}

function sortByScore(users) {
  const users2 = users;
  users2.sort((a, b) => b.score - a.score);
}

function obtenerDatos() {
  fetch('https://hackersarena-224603.appspot.com/users')
    .then(resp => resp.json())
    .then((data) => {
      const users = data.data;
      return users.map((user) => {
        // Creating all the cells and rows needed
        sortByScore(user);
        const tabBody = document.getElementById('tbodyLeaderboards');
        // Passing data
        for (let i = 0; i < user.length; i++) {
          const trUser = createNode('tr');
          const spanAli = createNode('span');
          const spanPos = createNode('span');
          const imgCnt = createNode('img');
          const spanSol = createNode('span');
          const tdPos = createNode('td');
          const tdAli = createNode('td');
          const tdCnt = createNode('td');
          const tdSol = createNode('td');

          spanAli.innerHTML = `${user[i].alias}`;
          spanPos.innerHTML = `${i + 1}`;
          imgCnt.src = setFlag(user[i].idCountry);
          spanSol.innerHTML = `${user[i].score}`;
          // Appending items
          append(tdPos, spanPos);
          append(tdAli, spanAli);
          append(tdCnt, imgCnt);
          append(tdSol, spanSol);
          append(trUser, tdPos);
          append(trUser, tdAli);
          append(trUser, tdCnt);
          append(trUser, tdSol);
          tabBody.appendChild(trUser);
        }
        return;
      })
    })
    .catch((error) => {
      console.log(error)
    });
}


document.addEventListener('onload', obtenerDatos(), true);
