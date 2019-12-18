const { Router } = require("express");

const UserController = require("./controllers/UserController");
const SessionController = require("./controllers/SessionController");
const commerceController = require("./controllers/CommerceController");
const ItemController = require("./controllers/ItemCestaController");
const monthlyQuoteController = require("./controllers/MonthlyQuoteController");

const authMiddleware = require("./middlewares/auth");
// const authorizationMiddleware = require("./middlewares/authorization");

const routes = Router();

routes.post("/sessions", SessionController.store);
routes.post("/create", UserController.store);

routes.use(authMiddleware);

routes.get("/users/:email", UserController.index);
routes.post("/createUser", UserController.store);
routes.delete("/users", UserController.destroy);
routes.get("/users", UserController.indexUsers);

// routes.post("/createUser", authorizationMiddleware, UserController.store);
// routes.delete("/users", authorizationMiddleware, UserController.destroy);
// routes.get("/users", authorizationMiddleware, UserController.indexUsers);

routes.post("/createItem", ItemController.createItem);
routes.post("/listItem", ItemController.listItens);

routes.post("/commerce", commerceController.newCommerce);
routes.get("/commerce", commerceController.showCommerces);
routes.get("/commerces", commerceController.listCommerces);
routes.put("/commerce/:id", commerceController.updateCommerce);
// routes.delete("/commerce/:id", commerceController.destroyCommerce);

routes.post("/monthlyQuote", monthlyQuoteController.newMonthlyQuote);
routes.get("/monthlyQuote", monthlyQuoteController.showMonthlyQuote);
routes.put("/monthlyQuote/:id", monthlyQuoteController.updateMonthlyQuote);
// routes.delete("/monthlyQuote/:id", monthlyQuoteController.destroyMonthlyQuote);

module.exports = routes;
