const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);


  app.get(
    "/api/test/buyer",
    controller.buyerBoard
  );

  app.get(
    "/api/test/seller",
    [authJwt.verifyToken, authJwt.isSeller],
    controller.sellerBoard
  );

  app.get(
    "/api/test/tutor",
    [authJwt.verifyToken, authJwt.isTutor],
    controller.tutorBoard
  );

  app.get(
    "/api/test/tech",
    [authJwt.verifyToken, authJwt.isTech],
    controller.techBoard
  );
};