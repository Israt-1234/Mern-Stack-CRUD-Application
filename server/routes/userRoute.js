//defined the endpoint of  application. and map them to the specific controller method

import express from "express"

import { create, deleteUser, getAllUsers, getUserById, update } from "../controller/userController.js"

const route = express.Router();

route.post("/user", create)
route.get("/users", getAllUsers)   //users
route.get("/user/:id", getUserById)
route.put("/update/user/:id", update)
route.delete("/delete/user/:id", deleteUser)

export default route;