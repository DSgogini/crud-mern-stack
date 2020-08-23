import express from "express";
import studentController from "../controllers/student.controller";

var router = express.Router();

router.get("/", studentController.getAllStudent);

module.exports = router;
