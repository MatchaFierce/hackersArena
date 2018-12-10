const urlSolutions = 'https://hackersarena-224603.appspot.com/solutions';
const urlProblem = 'https://hackersarena-224603.appspot.com/problems/';
const actualProblem = window.location.hash.substring(1);
// The data we are going to send in our request
const tryData = {
  aliasUser: 'Naekkeoya',
  idProblem: 2,
  idLanguage: 2,
  output: 'Just trying!',
};


function getProblem() {
  fetch(urlProblem.concat(actualProblem))
    .then(resp => resp.json())
    .then((data) => {
      const problem = data.data;
      titleProblem.innerHTML = `${problem.title}`;
      attempts.innerHTML = `${problem.attempts}`;
      solved.innerHTML = `${problem.solved}`;
      aliasUser.innerHTML = `${problem.aliasUser}`;
      descriptionProblem.innerHTML = `${problem.description}`;
      timeLimit.innerHTML = `${problem.timeLimit}`;
      memoryLimit.innerHTML = `${problem.memoryLimit}`;
      test.innerHTML = `${problem.test}`;
      console.log(test);
      return;
    })
    .catch((error) => {
      console.log(error)
    });
}


function createHeader(token) {
  const header = new Headers();
  header.append('Content-Type', 'application/x-www-form-urlencoded');
  header.append('token', token);
  return header;
}
// Create our request constructor with all the parameters we need
function createRequest(header) {
  const request = new Request(url, {
    method: 'POST',
    body: tryData,
    bodyUsed: true,
    headers: header,
  });
  request.body = tryData;
  console.log(request.headers.get('Content-Type'));
  console.log(request.headers.get('token'));
  console.log(request.body);
  console.log(request);
  return request;
}

function sendData() {
  fetch(createRequest(createHeader('$2b$10$tOUvGv8/nVkGky9T4nPn8O1N1y5VVEiPtQyuTGt1Tqd1dSTux4G4O')))
    .then(() => {
      console.log('Try');

      // Handle response we get from the API
    });
}
document.addEventListener('onload', getProblem(), true);
