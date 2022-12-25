
const controller = require("../controllers/item.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/item", controller.addItem);
  app.post("/api/item/update", controller.editItem);
  app.get(
    "/api/item/getAllItems",
    controller.getAllItems
  );
  app.get(
    "/api/item/:itemId",
    controller.getItem
  );
  app.delete(
    "/api/item/:itemId",
    controller.deleteItem
  );


}