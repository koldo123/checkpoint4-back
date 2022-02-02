const connection = require("../../db-config");

// Middleware
const findFamily = async (req, res, next) => {
  const { id_family } = req.params;
  const family = await getOneById(id_family);
  if (!family) {
    res.status(404).send("Family not found");
  } else {
    next();
  }
};

//////////////////////

const getAll = () => {
  return connection
    .promise()
    .query("SELECT * FROM families")
    .then(([families]) => families);
};

const getOneById = (id_family) => {
  return connection
    .promise()
    .query("SELECT * FROM families WHERE id_family = ?", [id_family])
    .then(([family]) => family);
};

module.exports = {
  findFamily,
  getAll,
  getOneById,
};
