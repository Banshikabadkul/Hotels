const express = require('express');
const router = express.Router();
const Person = require('./../models/Person');

// to send data to server and save in db---------we use post method---------------
router.post("/", async (req, res) => {
	try {
		const data = req.body;
		const newPerson = new Person(data);

		const response = await newPerson.save();

		console.log("Data saved successfully");
		res.status(200).json(response);
	} catch (err) {
		console.log(err);
		res
			.status(500)
			.json({ error: "Internal server error" });
	}
});

//to get data from server for the client we find data from db------------using get method-------------
router.get("/", async (req, res) => {
	try {
		const data = await Person.find();
		console.log("Data saved successfully");
		res.status(200).json(data);
	} catch (err) {
		console.log(err);
		res
			.status(500)
			.json({ error: "Internal server error" });
	}
});

// to check paramaterized data and work with dynamic api ..we pass parametr------------------------

router.get("/:workType", async (req, res) => {
	try {
		const workType = req.params.workType;
		if (
			workType == "chef" ||
			workType == "manager" ||
			workType == "waiter"
		) {
			const response = await Person.find({
				work: workType,
			});
			console.log("Data fetched successfully");
			res.status(200).json(response);
		} else {
			req
				.status(404)
				.json({ error: "Invalid Work type" });
		}
	} catch (err) {
		console.log(err);
		res
			.status(500)
			.json({ error: "Internal server error" });
	}
});

router.put('/:id', async (req,res)=>{
  try{
    const personId = req.params.id;
    const updatePersonData = req.body;

    const response = await Person.findByIdAndUpdate(personId,updatePersonData,{
      new:true,
      runValidators:true
    })
    if(!response){
      res.status(404).json({error:"Person not found"});
    }

    console.log("Data Updated");
    res.status(200).json(response);
  }
  catch(err){
    res.status(404).json({error:"Internal server error"});

  }
})

//deleting person by id-------------------
router.delete("/:id", async (req, res) => {
	try {
		const personId = req.params.id;
	

		const response =await Person.findByIdAndDelete(personId);
		if (!response) {
			res
				.status(404)
				.json({ error: "Person not found" });
		}

		console.log("Data Deleted");
		res.status(200).json({message:"Person DEleted Succefully"});
	} catch (err) {
		res
			.status(404)
			.json({ error: "Internal server error" });
	}
});

module.exports = router;