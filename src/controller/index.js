const { message } = require("../../models");

exports.getMessage = async (req, res) => {
  try {
    const data = await message.findAll({
      order: [["id", "DESC"]],
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "Success",
      data,
    });
  } catch (error) {
    res.send({
      status: "Failed",
      message: "Server Error, Can't Get The Data",
    });
  }
};

exports.addMessage = async (req, res) => {
  try {
    const { name, messages } = req.body;

    const data = await message.create({ name, messages });

    res.send({
      status: "Success",
      data,
    });
  } catch (error) {
    res.send({
      status: "Failed",
      message: "Server Error, Can't Add The Data",
    });
  }
};
