import { Request, Response } from "express";
import { pool } from "../config/database";
import { sendResponse } from "../utils/response_handler";

export const createTodo = async (req: Request, res: Response) => {
  const { title, description, isCompleted } = req.body;
  const metadata = { at: new Date(), by: "system" };
  try {
    const result = await pool.query(
      "INSERT INTO todos (title, description, metadata, isCompleted) VALUES ($1, $2, $3, $4) RETURNING *",
      [title, description, metadata, isCompleted]
    );
    sendResponse(res, result.rows[0], "Todo created successfully", true, 201);
  } catch (error) {
    sendResponse(res, null, "Error creating todo", false, 500);
  }
};

export const getAllTodos = async (_req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT * FROM todos");

    console.log("@@  result: ", result);

    sendResponse(res, result.rows, "Todos fetched successfully", true, 200);
  } catch (error) {
    console.log("@@  error: ", error);

    sendResponse(res, null, "Error fetching todos", false, 500);
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "DELETE FROM todos WHERE id = $1 RETURNING *",
      [id]
    );
    if (result.rowCount === 0) {
      return sendResponse(res, null, "Todo not found", false, 404);
    }
    sendResponse(res, result.rows[0], "Todo deleted successfully", true, 200);
  } catch (error) {
    sendResponse(res, null, "Error deleting todo", false, 500);
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, isCompleted } = req.body;
  const metadata = { at: new Date(), by: "system" };
  try {
    const result = await pool.query(
      "UPDATE todos SET title = $1, description = $2, metadata = $3, isCompleted = $4 WHERE id = $5 RETURNING *",
      [title, description, metadata, isCompleted, id]
    );
    if (result.rowCount === 0) {
      return sendResponse(res, null, "Todo not found", false, 404);
    }
    sendResponse(res, result.rows[0], "Todo updated successfully", true, 200);
  } catch (error) {
    sendResponse(res, null, "Error updating todo", false, 500);
  }
};
