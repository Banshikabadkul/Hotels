// const mongoose = require("mongoose");

// const MONGO_URI ="mongodb://localhost/hotels";

// mongoose.connect(MONGO_URI, {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	})
// 	.then(() => {
// 		console.log("Connected to MongoDB");
// 	})
// 	.catch((error) => {
// 		console.error(
// 			"Error connecting to MongoDB:",
// 			error
// 		);
// 	});

const mongoose = require("mongoose");

const mongoURL = "mongodb://localhost/hotels";

mongoose.connect(mongoURL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
	console.log("Connected to Moongoose or mongodb  server");
});

db.on("error", (err) => {
	console.log("Monodb show error ", err);
});

db.on("disconnected", () => {
	console.log("Monogdb disconnected");
});

module.exports = db;
