const url = 'https://hackersarena-224603.appspot.com/solutions';
// The data we are going to send in our request
let data = {
  aliasUser: "Naekkeoya",
  idProblem: 2,
  idLanguage: 2,
  output: "Just trying!",
};

let header = new Headers();
header.append('Content-Type', 'application/x-www-form-urlencoded');
header.append('token', '$2b$10$tOUvGv8/nVkGky9T4nPn8O1N1y5VVEiPtQyuTGt1Tqd1dSTux4G4O');
// Create our request constructor with all the parameters we need
var request = new Request(url, {
    method: 'POST',
    body: data,
    bodyUsed: true,
    headers: header,
});
request.body = data;
console.log(request.headers.get('Content-Type'));
console.log(request.headers.get('token'));
console.log(request.body);
console.log(request);

function sendData(){
 fetch(request)
  .then(function() {
    console.log("Try");

      // Handle response we get from the API
  });
}
