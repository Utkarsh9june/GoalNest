import express from 'express';
import { addGoal, changeGoalStatus, getGoals } from '../controllers/GoalController.js';
import protect from './../middlewares/authMiddleware.js';

const router = express.Router();

router.post("/addGoal", protect, addGoal);
router.patch("/:goalId/changeStatus", protect, changeGoalStatus)
router.get("/", protect, getGoals);

export default router;