const router = require("express").Router();
const Animal = require("../models/animalSchema");
const verify = require("./verifyToken"); // Requires user to be verified to access these routes

// Defining create route
router.post("/create", verify, (req, res) => {
  const newAnimal = new Animal({
    age_upon_outcome: req.body.age_upon_outcome,
    animal_id: req.body.animal_id,
    animal_type: req.body.animal_type,
    breed: req.body.breed,
    color: req.body.color,
    date_of_birth: req.body.date_of_birth,
    datetime: req.body.datetime,
    monthyear: req.body.monthyear,
    name: req.body.name,
    outcome_subtype: req.body.outcome_subtype,
    outcome_type: req.body.outcome_type,
    sex_upon_outcome: req.body.sex_upon_outcome,
  });

  newAnimal.save((err, Animal) => {
    if (err) res.status(500).json({ errmsg: err });

    res.status(200).json({ msg: Animal });
  });
});

// Defining read route
router.get("/read", verify, (req, res) => {
  Animal.find({}, (err, animals) => {
    if (err) res.status(500).json({ errmsg: err });

    res.status(200).json({ msg: animals });
  });
});

// Defining update route
router.put("/update", verify, (req, res) => {
  Animal.findById(req.body._id, (err, animal) => {
    if (err) res.status(500).json({ errmsg: err });
    (animal.age_upon_outcome = req.body.age_upon_outcome),
      (animal.animal_id = req.body.animal_id),
      (animal.animal_type = req.body.animal_type),
      (animal.breed = req.body.breed),
      (animal.color = req.body.color),
      (animal.date_of_birth = req.body.date_of_birth),
      (animal.datetime = req.body.datetime),
      (animal.monthyear = req.body.monthyear),
      (animal.name = req.body.name),
      (animal.outcome_subtype = req.body.outcome_subtype),
      (animal.outcome_type = req.body.outcome_type),
      (animal.sex_upon_outcome = req.body.sex_upon_outcome);

    animal.save((err, animal) => {
      if (err) res.status(500).json({ errmsg: err });

      res.status(200).json({ msg: animal });
    });
  });
});

// Defining delete route
router.delete("/delete/:id", verify, (req, res) => {
  Animal.findOneAndRemove({ _id: req.params.id }, (err, animal) => {
    if (err) res.status(500).json({ errmsg: err });

    res.status(200).json({ msg: animal });
  });
});

module.exports = router;
