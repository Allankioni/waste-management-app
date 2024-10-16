const Waste = require("../../Schemas/Waste");

const getAllWaste = async (req, res) => {
  const wastes = await Waste.find({});
  console.log(wastes);
  return res.status(200).json({ wastes });
};

module.exports = getAllWaste;
