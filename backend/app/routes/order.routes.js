
const controller = require("../controllers/order.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/order/create", controller.addOrder);
  app.put("/api/order/update", controller.editOrder);
  app.put("/api/order/updateT", controller.editOrderTest);
  app.get(
    "/api/order/getAllOrders",
    controller.getAllOrders
  );
  app.get(
    "/api/order/:OrderId",
    controller.getOrder
  );
  app.delete(
    "/api/order/:OrderId",
    controller.deleteOrders
  );


}