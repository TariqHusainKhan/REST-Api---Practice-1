import express from "express";
import { createUser, getUsers, getUserById, deleteUser, updateUser } from "../controllers/userController.js";


const router = express.Router();

// All routes in here are starting with /users
router.get("/",getUsers);

router.post("/", createUser);

router.get("/:id", getUserById);

router.delete("/:id",deleteUser);

router.patch("/:id", updateUser);

export default router;