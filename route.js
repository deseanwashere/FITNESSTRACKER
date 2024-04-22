const express = require('express')
const router = express.Router();





const {
  getActivities,
  getActivities,
  getRoutines,
  getRoutineById,
  createActivity,
  createRoutines,
  createRoutine_Activity,
  getActivitiesById,
  deleteActivity,
  deleteRoutine,







 } = require('./info.js')



 router.get('/activities', async (req , res, next) => {
       try {
          const allActivites = await getActivities();
          res.send(allActivites);
       }  catch (error) {
            next(error);
       }
 });



 router.get('/routines', async (req,res, next) => {
      try {
        const allRoutines = await getRoutines();
        res.send(allRoutines);

      }
      catch (error) {
          next(error)
      }



      
 });

 router.get('/activities/:activityId', async (req, res, next) => {
  try { 
   const activityId = await getActivityById(req.params.id);
   res.send(activityId);

  }
  catch (error){
     next(error)
  }
})


 router.get('/routines/:routineId', async (req, res, next) => {
   try { 
    const routineId = await getRoutineById(req.params.id);
    res.send(routineId);

   }
   catch (error){
      next(error)
   }
 })


 router.patch('/activities' , async (req, res, next) => {
    try {
     const newActivity = await createActivity(req.body);
       res.send(newActivity);
    } catch (error) {
      next(error)
    }

 });

 router.patch('/routines' , async (req, res, next) => {
    try {
      const newRoutines = await createRoutines(req.body);
        res.send(newRoutines);
    } catch(error)
    {next(error)}

 });

 router.patch('/routines_activities', async (req, res, next) => {
    try {
      const newRoutines_Activity = await createRoutine_Activity(req.body)
      res.send(newRoutines_Activity);
    }
    catch(error)
    {next(error)}

 });

 router.delete('/activities/:activityId', async (req, res, next) => {
   try {
      const deleteActivity = await deleteActivity(req.params.id)
      res.send(deleteActivity);

   }

   catch(error)
   {next(error)}

 });


 router.delete('/routines/:routineId', async (req, res, next) => {
    try {
      const deleteRoutine = await deleteRoutine(req.params.id)
      res.send(deleteRoutine);
    }

    catch(error){
      next(error)
    }


 });

 module.exports = router;

 
