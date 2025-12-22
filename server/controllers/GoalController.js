import Goal from '../models/Goals.js';

export const addGoal = async (req, res) => {
  try{
    const {title, description, timeline, priority, tags} = req.body;
    
    if(!title || !description || !timeline || !priority || !tags){
      return res.status(400).json({message: "All fields are required"});
    }

    const newGoal = await Goal.create({
      title,
      description,
      timeline,
      priority,
      tags: tags ? tags.split(',').map(t => t.trim()) : [],
      user: req.user.id
    });

    res.status(201).json({
      message: "Goal added successfully",
      goal: newGoal,
    });

  } catch(err) {
    console.error("Add Goal error", err);
    res.status(500).json({message: "Server Error"});
  }
};

export const getGoals = async (req,res) => {
  try{  
    const goals = await Goal.find({user: req.user._id}).sort({createdAt: -1});
    res.status(200).json(goals);
  } catch(err) {
    console.log("Get Goals Error: ", err);
    res.status(500).json({message: "Server Error"});
  }
};

export const getStats = async (req, res) => {
  try{    
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);
    const goals = await Goal.find({user: req.user._id});

    const activeGoals = goals.filter(goal => goal.status === 'In-Progress').length;
    
    const deadlineDriven = goals.filter(goal => {
      const deadline = new Date(goal.timeline);
      return deadline >= new Date() && deadline <= nextWeek;
    }).length;

    const highImpact = goals.filter(goal => goal.priority === 'high').length;

    const goalsCompleted = goals.filter(goal => goal.status === 'Completed').length;

    const notStarted = goals.filter(goal => goal.status === 'Not-Started').length;

    res.status(200).json({
      activeGoals,
      deadlineDriven,
      highImpact,
      goalsCompleted,
      notStarted
    });

  } catch(err) {
    console.error("Get Stats Error: ", err);
    res.status(500).json({message: "Server Error"});
  }
}

export const getTasks = async (req, res) => {
  try{
    const goals = await Goal.find({user: req.user._id}).sort({createdAt: -1});
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);

    const tasks = goals.filter(goal => {
      const deadline = new Date(goal.timeline);
      return goal.priority === 'high' && deadline >= new Date() && deadline <= nextWeek && (goal.status === 'In-Progress' || goal.status === 'Not-Started');
    });

    res.status(200).json(tasks);

  } catch(err) {
    console.error("Get Tasks Error: ", err);
    res.status(500).json({message: "Server Error"});
  }
}

export const changeGoalStatus = async (req, res) => {
  try{

    const {goalId} = req.params;
    const {status} = req.body;

    console.log("GoalID",req.params);

    if(!status || !goalId) {
      res.status(500).json({message: "Invalid request"});
    }

    const goal = await Goal.findOne({_id: goalId, user: req.user._id});

    if(!goal) {
      return res.status(404).json({message: "Goal not found"});
    }

    goal.status = status;
    await goal.save();

    res.status(200).json({message: "Status Changes Sucesssfully", goal});
  } catch(err) {
    console.error("Changes Status Error: ", err);
    res.status(500).json({message: "Server Error"});
  }
}

export const deleteGoal = async (req, res) => {
  try{
    const {goalId} = req.params;

    if(!goalId) {
      return res.status(400).json({message: "Goal ID required"});
    }

    const deletedGoal = await Goal.findByIdAndDelete(goalId);

    if(!deletedGoal) {
      return res.status(404).json({message: "Goal not found!"});
    }

    res.status(200).json({success: true, message: "Goal Deleted Successfully"});
  } catch (err){
    console.error("Delete Goal Error: ", err);
    res.status(500).json({message: "Server error"});
  }
}