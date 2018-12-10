const api = require('../api');


class AuthCtrl {
  constructor() {
    this.register = async (req, res, next) => {
      try {
        const { status, response } = await api.post(`${process.env.API_HOST}/users`, req.body.user);
        if (status === 201) {
          res.send(response);
        }
      } catch (err) {
        next(err);
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
