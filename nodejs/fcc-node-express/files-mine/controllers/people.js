const { people } = require("../data");

const getPeople = (req, res) => {
  res.status(200).json({ sucess: true, data: people });
};

const createPerson = (req, res) => {
  const { name } = req.body;

  if (!name)
    return res
      .status(400)
      .json({ sucess: false, msg: "please provide name value" });

  res.status(201).json({ sucess: true, person: name });
};

const modifyPerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!id || !name)
    return res
      .status(400)
      .json({ sucess: false, msg: "should provide an a id and a name" });

  people.map((person) => {
    if (person.id === +id) {
      person.name = name;
    }

    return person;
  });

  res.status(200).json({ sucess: true, data: people });
};

const deletePerson = (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msh: `No person with id: ${req.params.id}` });
  }

  const newPeople = people.filter((person) => person.id !== +req.params.id);
  res.status(200).json({ success: true, data: newPeople });
};

module.exports = { getPeople, createPerson, modifyPerson, deletePerson };
