const express = require("express");
const router = express.Router();
const Waxing = require("../models/Waxing");

router.get("/", async (req, res) => {
  try {
    const waxing = await Waxing.find();
    res.status(200).json({
      data: waxing,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const waxing = await Waxing.findById(req.params.id);

    res.status(200).json({
      data: waxing,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const waxing = new Waxing(req.body);
    const newwaxing = await waxing.save();

    res.status(200).json({
      data: newwaxing,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});



router.put("/:id", async (req, res) => {
  try {
    const waxing = await Waxing.findById(req.params.id);

    if (!waxing) {
      return res.status(400).json({ message: "Waxing does not exist" });
    }
    waxing.waxingname = req.body.waxingname || waxing.waxingname;
    waxing.number = req.body.number || waxing.number;
    waxing.waxingtype = req.body.waxingtype || waxing.waxingtype;
  
    const updatedWaxing = await waxing.save();

    res.status(200).json({
      data: updatedWaxing,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Waxing.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "Waxing is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
