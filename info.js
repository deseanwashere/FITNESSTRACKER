const client = require('./client')




async function getActivities() {

  try {
    const { rows } = await client.query(`
          SELECT * FROM activities`);
    return rows;

  } catch (error) {
    throw error;
  }

}

async function getRoutines() {

  try {
    const { rows } = await client.query(
      ` SELECT * FROM routines`
    );
    return rows;
  } catch (error) {

    throw error;
  }
}

async function getRoutineById() {
  try {
    const { rows: [Routine] } = await client.query(`
          SELECT * FROM routines
          WHERE id = $1;`, [id]);
    return Routine;
  } catch (error) {

    throw error;
  }
}

async function getActivitiesById() {
  try {
    const { rows: [Activity] } = await client.query(`
        SELECT * FROM activities
         WHERE id = $1;` , [id]);
    return Activity;
  } catch (error) {
    throw error;
  }
}

async function createActivity() {
  const { name, description } = body;

  try {
    const { rows: [Activity] } = await client.query(`

  INSERT INTO activities(name , description)
  VALUES $1 , $2
  RETURNING *;
  `, [name, description]);
    return Activity;
  } catch (error) {
    throw error;
  }
}

async function createRoutines() {
  const { isPublic, name, goal } = body;

  try {
    const { rows: [Routines] } = await client.query(`

    INSERT INTO routines( is_public, name, goal)
    VALUES $1, $2, $3
    RETURNING *;
  
  `, [isPublic, name, goal]);
    return Routines;
  } catch (error) {
    throw error;
  }
}

async function createRoutine_Activity() { 
  const { count }  = body;

  try { const { rows: [Routine_Activity]} = await client.query(`
  
    INSERT INTO routines_activities
    VALUES $1
    RETURNING *;
    
    
    `, [count]); 
       return Routine_Activity; 
      } catch(error) {

        throw error;
      }


}


async function deleteActivity() {

  try {
    const { rows: [Activity] } = await client.query(`
        DELETE FROM activities
        RETURNING *;`)
    return Activity;

  }
  catch (error) {
    throw error;
  }


}

async function deleteRoutine() {

  try {
    const { rows: [Routine] } = await client.query(`
       DELETE FROM routines
       RETURNING *;
       `)
    return Routine
  }
  catch (error) {
    throw error;
  }


}



module.exports = {
  getActivities,
  getRoutines,
  getRoutineById,
  createActivity,
  createRoutines,
  createRoutine_Activity,
  getActivitiesById,
  deleteActivity,
  deleteRoutine,


}