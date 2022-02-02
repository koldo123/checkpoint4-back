const connection = require("../../db-config");
const Joi = require("joi");

// Middleware
const findSpecie = async (req, res, next) => {
  const { id_specie } = req.params;
  const specie = await getOneById(id_specie);
  if (!specie) {
    res.status(404).send("Specie not found");
  } else {
    next();
  }
};

const validationSpecie = (req, res, next) => {
  const errors = Joi.object({
    specie_name: Joi.string().max(100).required(),
    scientific_name: Joi.string().max(150).required(),
    picture: Joi.string().max(500).required(),
    id_family: Joi.number().required(),
  }).validate(req.body, { abortEarly: false }).error;
  if (errors) {
    res.status(422).send(errors.message);
  } else {
    next();
  }
};
/////////////////

const getAll = () => {
  return connection
    .promise()
    .query("SELECT * FROM species")
    .then(([species]) => species);
};

const getOneById = (id_specie) => {
  return connection
    .promise()
    .query("SELECT * FROM species WHERE id_specie = ?", [id_specie])
    .then(([species]) => species);
};

const update = (id_specie, data) => {
  let sql = "UPDATE species SET";
  let sqlValues = [];
  let oneValue = false;

  if (data.specie_name) {
    sql += " specie_name = ?";
    sqlValues.push(data.specie_name);
    oneValue = true;
  }
  if (data.scientific_name) {
    sql += oneValue ? ", scientific_name = ?" : " scientific_name = ?";
    sqlValues.push(data.scientific_name);
    oneValue = true;
  }
  if (data.picture) {
    sql += oneValue ? ", picture = ?" : " picture = ?";
    sqlValues.push(data.picture);
    oneValue = true;
  }
  if (data.id_family) {
    sql += oneValue ? ", id_family = ?" : " id_family = ?";
    sqlValues.push(data.id_family);
    oneValue = true;
  }
  sql += " WHERE id_specie = ?";
  sqlValues.push(id_specie);

  return connection
    .promise()
    .query(sql, sqlValues)
    .then(([specie]) => specie.affectedRows === 1);
};

const create = (data) => {
  const { specie_name, scientific_name, picture, id_family } = data;
  return connection
    .promise()
    .query(
      "INSERT INTO species (specie_name, scientific_name, picture, id_family) VALUES (?,?,?,?)",
      [specie_name, scientific_name, picture, id_family]
    )
    .then(([species]) => species.insertId);
};

const deleteOne = (id_specie) => {
  return connection
    .promise()
    .query("DELETE FROM species WHERE id_specie = ?", [id_specie])
    .then(([species]) => species.affectedRows === 1);
};

const findSpeciesByIdFamily = (id_family) => {
  return connection
    .promise()
    .query("SELECT * FROM species WHERE id_family = ?", [id_family])
    .then(([species]) => species);
};

const findOneSpecieByIdFamily = (id_family, id_specie) => {
  return connection
    .promise()
    .query("SELECT * FROM species WHERE id_family = ? AND id_specie = ?", [
      id_family,
      id_specie,
    ])
    .then(([species]) => species);
};

module.exports = {
  findSpecie,
  validationSpecie,
  getAll,
  getOneById,
  update,
  create,
  deleteOne,
  findSpeciesByIdFamily,
  findOneSpecieByIdFamily,
};
