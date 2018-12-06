require('dotenv').config();
const Api = require('../app/js/api');

class User {
  constructor() {
    this.getAll = async () => {
      const url = `${process.env.API}/users/`;
      const response = await Api.get(url);
      return response;
    };
  }
}

module.exports = new User();
