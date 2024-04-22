const client = require('./client.js')


const createTables = async() => {
  try {
    await client.query(`
    CREATE TABLE activities (
      id SERIAL PRIMARY KEY,
      name VARCHAR(20) UNIQUE NOT NULL,
      description TEXT,
    );

    
    CREATE TABLES routines (
       id SERIAL PRIMARY KEY 
       is_public boolean 
       name VARCHAR(30) NOT NULL,
       goal TEXT,


    );

    CREATE TABLES routines_activities (
        routine_id INTERGER,
        activity_id INTERGER,
        count INTERGER,


    )

    

    `)
  } catch(err) {
    console.log(err);
  }


}

const dropTables = async() => {

  try {
   await client.query(
    `
    DROP TABLES IF EXISTS activities
    DROP TABLES IF EXISTS routines
    DROP TABLES IF EXISTS routines_activities

    
    `)

  }

  catch(err)
  {console.log(err)};



}


const syncAndSeed = async() => {
  await client.connect();
  console.log('CONNECTED');

  await createTables();
  console.log('TABLES CREATED');

  await dropTables();
  console.log('TABLES DROPPED');

  await client.end();
  console.log('NOT-CONNECTED');


}

syncAndSeed();