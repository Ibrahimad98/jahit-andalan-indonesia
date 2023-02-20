const { hashPassword, comparedPassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");
const { User, Order, sequelize } = require("../models/index");
const { QueryTypes } = require("sequelize");

class Controller {
  static async register(req, res, next) {
    const { username, password } = req.body;
    // console.log(req.body);
    console.log("dari controller user");
    try {
      const createdUser = await User.create({
        username,
        password,
      });
      res.status(201).json({
        id: createdUser.id,
        email: createdUser.username,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async login(req, res, next) {
    console.log(process.env.SECRET, "<<<<<<<");
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        throw { name: "bad_request_login" };
      }
      const foundUser = await User.findOne({
        where: {
          username,
        },
      });
      if (!foundUser) {
        throw { name: "invalid_credentials" };
      }
      const comparePassword = comparedPassword(password, foundUser.password);

      if (!comparePassword) {
        throw { name: "invalid_credentials" };
      }

      const payload = {
        id: foundUser.id,
      };

      const token = createToken(payload);

      res.status(200).json({
        access_token: token,
        username: foundUser.username,
        id: foundUser.id,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async viewUser(req, res, next) {
    try {
      const data = await User.findByPk(req.user.id, {
        attributes: {
          exclude: ["password"],
        },
      });

      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async createOrder(req, res, next) {
    try {
      const { name, amount, price } = req.body;

      const data = await Order.create({
        name,
        amount,
        price,
        UserId: req.user.id,
      });

      res.status(200).json({ message: "success adding order to user with id " + req.user.id });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async findAllOrder(req, res, next) {
    try {
      let data = await Order.findAll({
        order: [["id", "ASC"]],
        where: {
          UserId: req.user.id,
        },
      });

      // let data = await sequelize.query('SELECT * FROM "Orders" WHERE "UserId" = ' + req.user.id + " ORDER BY id ASC", { type: QueryTypes.SELECT });
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = Controller;
