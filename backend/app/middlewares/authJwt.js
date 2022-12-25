const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;
const Role = db.role;

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.userId = decoded.id;
    next();
  });
};

isBuyer = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    Role.find(
      {
        _id: { $in: user.roles }
      },
      (err, roles) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === "buyer") {
            next();
            return;
          }
        }

        res.status(403).send({ message: "Require Buyer Role!" });
        return;
      }
    );
  });
};

isSeller = (req, res, next) => {
    User.findById(req.userId).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
  
      Role.find(
        {
          _id: { $in: user.roles }
        },
        (err, roles) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
  
          for (let i = 0; i < roles.length; i++) {
            if (roles[i].name === "seller") {
              next();
              return;
            }
          }
  
          res.status(403).send({ message: "Require Seller Role!" });
          return;
        }
      );
    });
  };


isTutor = (req, res, next) => {
    User.findById(req.userId).exec((err, user) => {
        if (err) {
        res.status(500).send({ message: err });
        return;
        }

        Role.find(
        {
            _id: { $in: user.roles }
        },
        (err, roles) => {
            if (err) {
            res.status(500).send({ message: err });
            return;
            }

            for (let i = 0; i < roles.length; i++) {
            if (roles[i].name === "tutor") {
                next();
                return;
            }
            }

            res.status(403).send({ message: "Require Tutor Role!" });
            return;
        }
        );
    });
};

isTech = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    Role.find(
      {
        _id: { $in: user.roles }
      },
      (err, roles) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === "tech") {
            next();
            return;
          }
        }

        res.status(403).send({ message: "Require Technician Role!" });
        return;
      }
    );
  });
};

const authJwt = {
  verifyToken,
  isBuyer,
  isSeller,
  isTech,
  isTutor
};
module.exports = authJwt;