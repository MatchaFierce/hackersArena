const urlP = './submitSolutions.html#';

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

function obtenerDatos() {
  fetch('https://hackersarena-224603.appspot.com/problems')
    .then(resp => resp.json())
    .then((data) => {
      const problems = data.data;
      return problems.map((problem) => {
        const ulPrb = document.getElementById('ulProblems');

        for (let i = 0; i < problem.length; i++) {
          const liPrb = createNode('li');
          const spanPrb = createNode('span');
          const aPrb = createNode('a');
          aPrb.href = urlP.concat(problem[i].id);
          spanPrb.innerHTML = `${problem[i].title}`;
          // Appending items
          append(aPrb, spanPrb);
          append(liPrb, aPrb);
          append(ulPrb, liPrb);
        }
        return;
      })
    })
    .catch((error) => {
      console.log(error)
    });
}


document.addEventListener('onload', obtenerDatos(), true);
