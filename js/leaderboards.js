function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

function setFlag(idCountry) {
  let ruta;
  if(idCountry == 1)
  {
    ruta = "../img/flags/mx.png";
  } else if (idCountry == 2)
  {
    ruta = "../img/flags/us.png";
  }
  return ruta;
}

function sortByScore(users) {
  let users2 = users;
  users2.sort(function(a, b){return b.score - a.score});
}

function obtenerDatos(){
 fetch("https://hackersarena-224603.appspot.com/users")
 .then((resp) => resp.json() )
 .then(function(data) {
   let users;
   users = data.data;
   return users.map(function(user){
     // Creating all the cells and rows needed
     sortByScore(user);
     let tabBody = document.getElementById('tbodyLeaderboards');
     // Passing data
     for(var i=0; i<user.length; i++){
       let trUser = createNode('tr');
       let spanAli = createNode('span');
       let spanPos = createNode('span');
       let imgCnt = createNode('img');
       let spanSol = createNode('span');
       let tdPos = createNode('td');
       let tdAli = createNode('td');
       let tdCnt = createNode('td');
       let tdSol = createNode('td');

       spanAli.innerHTML = `${user[i].alias}`;
       spanPos.innerHTML =`${i+1}`;
       imgCnt.src = setFlag(user[i].idCountry);
       spanSol.innerHTML = `${user[i].score}`;
       // Appending items
       append(tdPos, spanPos);
       append(tdAli, spanAli);
       append(tdCnt, imgCnt);
       append(tdSol, spanSol);
       append(trUser,tdPos);
       append(trUser,tdAli);
       append(trUser,tdCnt);
       append(trUser,tdSol);
       tabBody.appendChild(trUser);
     }
     return;
   })
 })
 .catch(function(error) {
   console.log(error)
 });
}


document.addEventListener('onload',obtenerDatos(),true);
