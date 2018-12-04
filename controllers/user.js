const fs = require('fs');
const mustache = require('mustache');
const { User } = require('../models');


class UserCtrl {
  constructor() {
    this.login = async (req, res) => {
      const { alias } = req.body.alias;
      const result = await User.login(req);
      if (result.statusCode === 200) {
        res.cookie('token', result.body.token);
        res.cookie('alias', alias);
      } else if (result.statusCode === 409) {
        res.status(409).send(result);
      }
    };

    this.logout = async (req, res) => {
      const result = await User().logout(req);
      if (result.statusCode === 200) {
        res.clearCookie('token');
        res.clearCookie('alias');
        res.redirect('/');
      } else {
        res.status(409).send(result);
      }
    };
  }
}


module.exports = new UserCtrl();
