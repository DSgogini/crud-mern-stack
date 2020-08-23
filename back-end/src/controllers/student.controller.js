import Student from "../models/student";

/**
 * Create a new Student in Database.
 * @param {*} req
 * @param {*} res
 */
const createStudnet = function (req, res) {
  Student.create(
    {
      name: req.body.name,
      email: req.body.email,
      rollno: req.body.rollno,
    },
    function (err, data) {
      if (err)
        return res
          .status(500)
          .send("There was a problem adding the information to the database.");
      res.status(200).send(data);
    }
  );
};

/**
 * Update Student in Database.
 * @param {*} req
 * @param {*} res
 */
const updateStudent = function (req, res) {
  Student.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (
    err,
    data
  ) {
    if (err)
      return res.status(500).send("There was a problem updating the user.");
    res.status(200).send(data);
  });
};

/**
 * Get Student By Id.
 * @param {*} req
 * @param {*} res
 */
const getStudentById = function (req, res) {
  Student.findById(req.params.id, (err, data) => {
    if (err)
      return res.status(500).send("There was a problem finding the user.");

    if (!data) return res.status(404).send("No Student found.");

    res.status(200).send(data);
  });
};

/**
 * Gets all students from database.
 * @param {*} request
 * @param {*} response
 */
const getAllStudent = function (req, res) {
  console.log(Student);

  Student.find({}, function (err, data) {
    if (err)
      return res.status(500).send("There was a problem finding the users.");
    res.status(200).send(data);
  });
};

module.exports = {
  createStudnet,
  updateStudent,
  getStudentById,
  getAllStudent,
};
