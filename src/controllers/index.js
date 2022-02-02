const speciesRouter = require("./species");
const familiesRouter = require("./families");

const setupRoutes = (app) => {
  app.use("/api/species", speciesRouter);
  app.use("/api/families", familiesRouter);
};

module.exports = {
  setupRoutes,
};
