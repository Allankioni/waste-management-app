const Waste = require("../../Schemas/Waste");

const getWaste = async (req, res) => {
  const { refabishability } = req.query;
  console.log(refabishability);
  const wastes = await Waste.find({
    refabishability: { $gte: +refabishability },
  });
  console.log(wastes)
  return res.status(200).json({ wastes });
};

module.exports = getWaste;
