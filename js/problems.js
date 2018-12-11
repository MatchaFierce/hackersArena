const urlP = './submitSolutions.html#';

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

function getAPR(solved, tried) {
  if (solved != 0) {
    return (solved * 100) / tried;
  }
  return 0;
}

function obtenerDatos() {
  fetch('https://hackersarena-224603.appspot.com/problems')
    .then(resp => resp.json())
    .then((data) => {
      const problems = data.data;
      return problems.map((problem) => {
        const tabBody = document.getElementById('tbodyProblems');

        for (let i = 0; i < problem.length; i++) {
          const trLeaderboard = createNode('tr');
          const spanID = createNode('span');
          const aPrb = createNode('a');
          const spanTitle = createNode('span');
          const spanAttempts = createNode('span');
          const spanSolved = createNode('span');
          const spanAC = createNode('span');
          const tdIDl = createNode('td');
          const tdTle = createNode('td');
          const tdAtp = createNode('td');
          const tdSol = createNode('td');
          const tdACl = createNode('td');

          spanID.innerHTML = `${problem[i].id}`;
          spanTitle.innerHTML = `${problem[i].title}`;
          spanAttempts.innerHTML = `${problem[i].attempts}`;
          spanSolved.innerHTML = `${problem[i].solved}`;
          spanAC.innerHTML = `${getAPR(problem[i].solved, problem[i].attempts).toFixed(2)}`;
          aPrb.href = urlP.concat(problem[i].id);
          // Appending items
          append(aPrb, spanTitle);
          append(tdIDl, spanID);
          append(tdTle, aPrb);
          append(tdAtp, spanAttempts);
          append(tdSol, spanSolved);
          append(tdACl, spanAC);
          append(trLeaderboard, tdIDl);
          append(trLeaderboard, tdTle);
          append(trLeaderboard, tdAtp);
          append(trLeaderboard, tdSol);
          append(trLeaderboard, tdACl);
          tabBody.appendChild(trLeaderboard);
        }
        return;
      })
    })
    .catch((error) => {
      console.log(error)
    });
}


document.addEventListener('onload', obtenerDatos(), true);
