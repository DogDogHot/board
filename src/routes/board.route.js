import express from "express";
import BoardController from "../controllers/board.controller";
import catchAsync from "../middlewares/catchAsync.middleware";

const { findBoards } = BoardController;

const router = express.Router();

router.get("/", catchAsync(findBoards));
router.post("/", (req, res) => res.send("end"));
router.put("/:boardId", (req, res) => res.send("end"));
router.patch("/:boardId", (req, res) => res.send("end"));
router.delete("/:boardId", (req, res) => res.send("end"));

export default router;
