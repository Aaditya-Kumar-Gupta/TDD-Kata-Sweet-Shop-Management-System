const sweetService = require("../services/sweetService");

const createSweet = async (req, res) => {
  const sweet = await sweetService.createSweet(req.body);
  res.status(201).json(sweet);
};

const getSweets = async (req, res) => {
  const sweets = await sweetService.getAllSweets();
  res.json(sweets);
};

const search = async (req, res) => {
  const sweets = await sweetService.searchSweets(req.query);
  res.json(sweets);
};

const updateSweet = async (req, res) => {
  const sweet = await sweetService.updateSweet(req.params.id, req.body);
  res.json(sweet);
};

const deleteSweet = async (req, res) => {
  await sweetService.deleteSweet(req.params.id);
  res.json({ message: "Deleted successfully" });
};

const purchase = async (req, res) => {
  const sweet = await sweetService.purchaseSweet(
    req.params.id,
    req.body.quantity
  );
  res.json(sweet);
};

const restock = async (req, res) => {
  const sweet = await sweetService.restockSweet(
    req.params.id,
    req.body.quantity
  );
  res.json(sweet);
};

module.exports = {
  createSweet,
  getSweets,
  search,
  updateSweet,
  deleteSweet,
  purchase,
  restock
};
