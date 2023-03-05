const users = require('../../MOCK_DATA.json');
const { validationResult } = require('express-validator');
const logger = require('logger');

class UserController {

  static async showUsers(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }
      if (req.query.page && isNaN(req.query.page)) {
        return res.status(403).json({
          msg: "Data validataion fail",
          errors: [
            {
              "location": "query",
              "msg": "Is not a integer",
              "param": "page"
            }
          ]
        });
      }
      if (!users.data) {
        return res.status(503).json({ msg: "Data doesn't exist" });
      }

      const pageNum = req.query.page || 1;
      const startIndex = (pageNum - 1) * 50;
      const endIndex = pageNum * 50;
      const slicedUsers = users.data.slice(startIndex, endIndex);
      res.status(200).json(slicedUsers);
    } catch (err) {
      logger.error(err);
      res.status(500).json({ msg: "Internal server error" });
    }
  }

  static async getUserById(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }
      if (isNaN(req.params.id)) {
        return res.status(403).json({
          msg: "Data validataion fail",
          errors: [
            {
              "location": "params",
              "msg": "Is not a integer",
              "param": "id"
            }
          ]
        });
      }
      if (!users.data) {
        return res.status(503).json({ msg: "Data doesn't exist" });
      }
      const user = users.data.find((user) => user.id === parseInt(req.params.id));
      if (!user) {
        res.status(404).json({ msg: "User doesn't exist" });
        return;
      }
      res.status(200).json(user);
    } catch (err) {
      logger.error(err);
      res.status(500).json({ msg: "Internal server error" });
    }
  }
}

module.exports = UserController;
