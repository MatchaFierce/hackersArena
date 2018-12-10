require('dotenv').config();
const api = require('../api');

class User {
  constructor({
    alias, name, lastName, score, email, password, idUniversity, idCountry, status,
  }) {
    this.alias = alias;
    this.name = name;
    this.lastName = lastName;
    this.score = score;
    this.email = email;
    this.password = password;
    this.idUniversity = idUniversity;
    this.idCountry = idCountry;
    this.status = status;

    this.getAll = async () => {
      const url = `${process.env.API}/users/`;

      try {
        const response = await api.get(url);
        return response;
      } catch (err) {
        throw err;
      }
    };
  }
}

module.exports = User;
