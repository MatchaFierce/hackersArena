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

    this.post = async (url = '', body = {}, headers = {}) => {
      try {
        const response = await axios.post(url, {
          headers: {
            ...headers,
          },
          body: {
            ...body,
          },
        });
        return response.data;
      } catch (err) {
        throw err;
      }
    };

    this.put = async (url = '', body = {}, headers = {}) => {
      try {
        const response = await axios.put(url, {
          headers: {
            ...headers,
          },
          body: {
            ...body,
          },
        });
        return response.data;
      } catch (err) {
        throw err;
      }
    };

    this.delete = async (url = '', body = {}, headers = {}) => {
      try {
        const response = await axios.delete(url, {
          headers: {
            ...headers,
          },
          body: {
            ...body,
          },
        });
        return response.data;
      } catch (err) {
        throw err;
      }
    };
  }
}

module.exports = new Api();
