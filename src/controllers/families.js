const familiesRouter = require("express").Router();
const Family = require("../models/family");
const Specie = require("../models/specie");

familiesRouter.get("/", async (req, res) => {
  try {
    const families = await Family.getAll();
    if (families) {
      res.status(200).json(families);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

familiesRouter.get("/:id_family", async (req, res) => {
  const { id_family } = req.params;
  try {
    const family = await Family.getOneById(id_family);
    if (family.length) {
      res.status(200).json(family);
    } else {
      res.status(404).send("Family not found");
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

familiesRouter.get(
  "/:id_family/species",
  Family.findFamily,
  async (req, res) => {
    const { id_family } = req.params;
    try {
      const species = await Specie.findSpeciesByIdFamily(id_family);
      if (species.length) {
        res.status(200).json(species);
      } else {
        res.status(404).send("Species not found");
      }
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

familiesRouter.get(
  "/:id_family/species/:id_specie",
  Family.findFamily,
  Specie.findSpecie,
  async (req, res) => {
    const { id_family, id_specie } = req.params;
    try {
      const specie = await Specie.findOneSpecieByIdFamily(id_family, id_specie);
      if (specie.length) {
        res.status(200).json(specie);
      } else {
        res.status(404).send("Species not found");
      }
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

module.exports = familiesRouter;
