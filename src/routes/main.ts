import express, { Router } from "express";
import {
  createTodo,
  getAllTodos,
  deleteTodo,
  updateTodo,
} from "../controllers/todo";

const router: Router = express.Router();

router.use((req, res, next) => {
  const { jwtMiddleware } = require("../middleware/jwt");
  jwtMiddleware(req, res, next);
});

// Todo routes
router.post("/createTodo", createTodo);
router.get("/getAllTodo", getAllTodos);
router.delete("/deleteTodo/:id", deleteTodo);
router.put("/updateTodo/:id", updateTodo);

export default router;
