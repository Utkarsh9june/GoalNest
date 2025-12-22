import express from 'express';
import { addGoal, changeGoalStatus, deleteGoal, getGoals, getStats, getTasks } from '../controllers/GoalController.js';
import protect from './../middlewares/authMiddleware.js';

const router = express.Router();

router.post("/addGoal", protect, addGoal);
router.patch("/:goalId/changeStatus", protect, changeGoalStatus)
router.delete("/:goalId/deleteGoal", protect, deleteGoal);
router.get("/", protect, getGoals);
router.get("/stats", protect, getStats);
router.get("/tasks", protect, getTasks);

export default router;