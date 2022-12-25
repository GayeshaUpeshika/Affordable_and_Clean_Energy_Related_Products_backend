
const controller = require("../controllers/req.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/req/new", controller.newReq);
  app.post("/api/req/update", controller.editReq);
  app.get(
    "/api/req/getAll",
    controller.getAllReq
  );
  app.get(
    "/api/req/:reqId",
    controller.getReq
  );

  app.get(
    "/api/req/getbyTech/:userId",
    controller.getbyTech
  );

  app.get(
    "/api/req/getbyBuyer/:userId",
    controller.getbyBuyer
  );
  app.delete(
    "/api/req/:reqId",
    controller.deleteReq
  );


}