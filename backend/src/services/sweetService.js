const Sweet = require("../models/Sweet");

const createSweet = async (data) => {
  return await Sweet.create(data);
};

const getAllSweets = async () => {
  return await Sweet.find();
};

const searchSweets = async (query) => {
  const filter = {};

  if (query.name) {
    filter.name = { $regex: query.name, $options: "i" };
  }

  if (query.category) {
    filter.category = query.category;
  }

  if (query.minPrice || query.maxPrice) {
    filter.price = {};
    if (query.minPrice) filter.price.$gte = query.minPrice;
    if (query.maxPrice) filter.price.$lte = query.maxPrice;
  }

  return await Sweet.find(filter);
};

const updateSweet = async (id, data) => {
  return await Sweet.findByIdAndUpdate(id, data, { new: true });
};

const deleteSweet = async (id) => {
  return await Sweet.findByIdAndDelete(id);
};

const purchaseSweet = async (id, qty) => {
  const sweet = await Sweet.findById(id);
  if (!sweet || sweet.quantity < qty) {
    throw new Error("Out of stock");
  }

  sweet.quantity -= qty;
  return await sweet.save();
};

const restockSweet = async (id, qty) => {
  const sweet = await Sweet.findById(id);
  sweet.quantity += qty;
  return await sweet.save();
};

module.exports = {
  createSweet,
  getAllSweets,
  searchSweets,
  updateSweet,
  deleteSweet,
  purchaseSweet,
  restockSweet
};
