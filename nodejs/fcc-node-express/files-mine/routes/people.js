const express = require("express");
const peopleControllers = require("../controllers/people");

const router = express.Router();

router.get("/", peopleControllers.getPeople);

router.post("/", peopleControllers.createPerson);

router.put("/:id", peopleControllers.modifyPerson);

router.delete("/:id", peopleControllers.deletePerson);

module.exports = router;
