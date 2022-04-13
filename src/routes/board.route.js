import express from "express";

const router = express.Router();

router.get("/", (req, res) => res.send("end"));
router.post("/", (req, res) => res.send("end"));
router.put("/:boardId", (req, res) => res.send("end"));
router.patch("/:boardId", (req, res) => res.send("end"));
router.delete("/:boardId", (req, res) => res.send("end"));

export default router;
