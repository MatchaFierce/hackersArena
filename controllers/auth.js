const api = require('../api');


class AuthCtrl {
  constructor() {
    this.register = async (req, res, next) => {
      console.log(req.body);
      try {
        const response = await api.post(`${process.env.API_HOST}/users`, {
          alias: req.body.alias,
          name: req.body.name,
          lastName: req.body.lastName,
          email: req.body.email,
          password: req.body.password,
          idUniversity: req.body.idUniversity,
          idCountry: req.body.idCountry,
        });
        res.send(response.data);
      } catch (err) {
        next(err);
      }
    };

    this.login = async (req, res, next) => {
      try {
        const response = await api.login(`${process.env.API_HOST}/login`, {
          email: req.body.email,
          password: req.body.password,
        });
        res.cookie('token', response.token);
        res.redirect('/');
      } catch (error) {
        next(error);
      }
    };

    this.logout = async (req, res, next) => {
      res.clearCookie('token');
      res.redirect('/');
      next();
    };
  }
}


module.exports = new AuthCtrl();
