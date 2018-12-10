import fetch from 'node-fetch';

const getAllUsers = (url = '', headers = {}) => {
  return fetch(url, {
    method: 'GET',
    rejectUnauthorized: false,
    headers: {
      ...headers,
    },
  });
}

const getUsers = async () => {
  const url = 'https://hackersarena-224603.appspot.com/';
  const response = await getAllUsers(url)
    .catch((err) => { throw err; });
  return response.data;
};

const createChild = tag => this.document.createElement(tag);

const tbody = this.document.getElementById('tableUser').childNodes[3];

const users = getUsers('https://hackersarena-224603.appspot.com/users/');

users.map((element) => {
  const tr = createChild('tr');
  let td = createChild('td');
  td.innerHTML = element.alias;
  tr.appendChild(td);
  td = createChild('td');
  td.innerHTML = element.score;
  tr.appendChild(td);
  tbody.appendChild(tr);
  return tbody;
});
