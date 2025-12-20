import express from 'express';
import { addGoal, changeGoalStatus, deleteGoal, getGoals } from '../controllers/GoalController.js';
import protect from './../middlewares/authMiddleware.js';

const router = express.Router();

router.post("/addGoal", protect, addGoal);
router.patch("/:goalId/changeStatus", protect, changeGoalStatus)
router.delete("/:goalId/deleteGoal", protect, deleteGoal);
router.get("/", protect, getGoals);

export default router;