
const controller = require("../controllers/adress.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/address", controller.addadress);
  app.post("/api/address/update", controller.edit);
  app.get(
    "/api/address/getAllItems",
    controller.getall
  );
  app.get(
    "/api/address/:Id",
    controller.getaddress
  );
  app.get(
    "/api/address/getbyuid/:Uid",
    controller.getbyUid
  );
  app.delete(
    "/api/address/:Id",
    controller.deleteaddress
  );


}