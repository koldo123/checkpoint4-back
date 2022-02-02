const speciesRouter = require("express").Router();
const Specie = require("../models/specie");

speciesRouter.get("/", async (req, res) => {
  try {
    const species = await Specie.getAll();
    res.status(200).json(species);
  } catch (err) {
    res.status(500).send(err);
  }
});

speciesRouter.get("/:id_specie", async (req, res) => {
  const { id_specie } = req.params;
  try {
    const specie = await Specie.getOneById(id_specie);
    if (specie) {
      res.status(200).json(specie);
    } else {
      res.status(404).send("Specie not found");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

speciesRouter.put("/:id_specie", Specie.findSpecie, async (req, res) => {
  const { id_specie } = req.params;
  const data = req.body;
  try {
    const updatedSpecie = await Specie.update(id_specie, data);
    if (updatedSpecie) {
      res.status(200).send("Specie updated");
    } else {
      res.status(400).send("Bad request");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

speciesRouter.post("/", Specie.validationSpecie, async (req, res) => {
  const data = req.body;
  try {
    const createdSpecieId = await Specie.create(data);
    if (createdSpecieId) {
      res.status(200).json({ id_specie: createdSpecieId, ...data });
    } else {
      res.status(400).send("Bad request");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

speciesRouter.delete("/:id_specie", Specie.findSpecie, async (req, res) => {
  const { id_specie } = req.params;
  try {
    const deletedSpecie = await Specie.deleteOne(id_specie);
    if (deletedSpecie) {
      res.status(202).send("Specie deleted");
    } else {
      res.status(400).send("Bad request");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = speciesRouter;
