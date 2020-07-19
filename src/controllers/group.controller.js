const groupService = require("../services/group.service");

module.exports = {
  async getAll(req, res, next) {
    groupService
      .findAll()
      .then((groups) => {
        res.status(200).send(JSON.stringify(groups));
      })
      .catch((err) => {
        throw next(err);
      });
  },
};
