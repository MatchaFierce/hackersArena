function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

function setFlag(idCountry) {
  let ruta = '../img/flags/';
  ruta += idCountry;
  ruta += '.png';
  return ruta;
}


function getUniversityNameById(id){

}

function obtenerDatos() {
  fetch('https://hackersarena-224603.appspot.com/solutions')
    .then(resp => resp.json())
    .then((data) => {
      const solutions = data.data;
      return solutions.map((solution) => {
        // Creating all the cells and rows needed
        //sortByScore(user);
        const tabBody = document.getElementById('tbodySolutions');
        // Passing data
        for (let i = 0; i < solution.length; i++) {
          const trUser = createNode('tr');
          const spanAli = createNode('span');
          const spanPos = createNode('span');
          const spanPro = createNode('span');
          const spanLan = createNode('span');
          const spanVer = createNode('span');

          const tdPos = createNode('td');
          const tdAli = createNode('td');
          const tdPro = createNode('td');
          const tdLan = createNode('td');
          const tdVer = createNode('td');

          spanAli.innerHTML = `${solution[i].aliasUser}`;
          spanPos.innerHTML = `${solution[i].id}`;
          //spanSol.innerHTML = `${solution[i].score}`;

          let route = 'https://hackersarena-224603.appspot.com/problems/';
          route += solution[i].idProblem;
          fetch(route)
            .then(resp => resp.json())
            .then((datau) => {
              //console.log(datau.data.name);
              let aux = datau.data.title;
              spanPro.innerHTML = `${aux}`;
            })
            .catch((error) => {
              console.log(error)
            });

          route = 'https://hackersarena-224603.appspot.com/languages/';
          route += solution[i].idLanguage;
          fetch(route)
            .then(resp => resp.json())
            .then((datau) => {
              //console.log(datau.data.name);
              let aux = datau.data.name;
              spanLan.innerHTML = `${aux}`;
            })
            .catch((error) => {
              console.log(error)
            });

          route = 'https://hackersarena-224603.appspot.com/verdicts/';
          route += solution[i].idVerdict;
          fetch(route)
            .then(resp => resp.json())
            .then((datau) => {
              //console.log(datau.data.name);
              let aux = datau.data.type;
              spanVer.innerHTML = `${aux}`;
            })
            .catch((error) => {
              console.log(error)
            });

          // Appending items
          append(tdPos, spanPos);
          append(tdAli, spanAli);
          append(tdPro, spanPro);
          append(tdLan, spanLan);
          append(tdVer, spanVer);

          append(trUser, tdPos);
          append(trUser, tdAli);
          append(trUser, tdPro);
          append(trUser, tdLan);
          append(trUser, tdVer);
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
