const express = require("express");
const router = express.Router();
const MenuItem = require("../models/MenuItem");

router.post("/", async (req, res) => {
	try {
		const data = req.body;
		const newItem = new MenuItem(data);

		const response = await newItem.save();
		console.log("Data saved successfully");
		res.status(200).json(response);
	} catch (err) {
		console.log(err);
		res
			.status(500)
			.json({ error: "Internal Server Error" });
	}
});

router.get("/", async (req, res) => {
	try {
		const data = await MenuItem.find();
		console.log("Data saved successfully");
		res.status(200).json(data);
	} catch (err) {
		console.log(err);
		res
			.status(500)
			.json({ error: "Internal server error" });
	}
});

// ge data by searching taste---------

router.get("/:tasteType", async (req, res) => {
	try {
		const tasteType = req.params.tasteType;
		if (
			tasteType == "sweet" ||
			tasteType == "sour" ||
			tasteType == "spicy"
		) {
			const data = await MenuItem.find({
				taste: tasteType,
			});
			console.log("data fetched successfully!!");
			res.status(200).json(data);
		} else {
			res
				.status(404)
				.json({ error: "Invalid Taste type" });
		}
	} catch (err) {
		res
			.status(500)
			.json({ error: "Inernal server error" });
	}
});

module.exports = router;

