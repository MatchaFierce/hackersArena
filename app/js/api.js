const axios = require('axios');

class Api {
  constructor() {
    this.get = async (url = '', headers = {}) => {
      try {
        const response = await axios.get(url, {
          headers: {
            ...headers,
          },
        });
        return response.data;
      } catch (err) {
        throw err;
      }
    };

    this.post = async (url = '', headers = {}, body = {}) => {
      try {
        const response = await axios.post(url, {
          headers: {
            ...headers,
          },
          body,
        });
        return response.data;
      } catch (err) {
        throw err;
      }
    };
  }
}

module.exports = new Api();
