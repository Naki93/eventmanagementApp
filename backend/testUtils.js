// Import necessary libraries for setting up MongoDB in-memory database
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

// Declare a variable to hold the MongoDB in-memory server instance
let mongod;

// Function to set up the MongoDB in-memory database
const setup = async () => {
  // Create an instance of the MongoDB in-memory server
  mongod = await MongoMemoryServer.create({
    instance: {
      dbName: 'login', // Specify a database name for the in-memory server
      startingTimeout: 30000,
      
    },
  });

  // Start the server with a longer timeout
  await mongod.start(10000);

  // Get the connection URI for the in-memory database
  const uri = mongod.getUri();

  // Set the environment variable with the in-memory database URI
  process.env.MONGO_URI = uri;
  
};
// Function to tear down and clean up the MongoDB in-memory database
// const teardown = async () => {
//   // Disconnect from the MongoDB database
//   await mongoose.disconnect();
//    // Stop and clean up the MongoDB in-memory server
//   // await mongod.stop();
// };

// // Export the setup, teardown, and mongod variables for use in tests
// module.exports = { setup, teardown, mongod };

const teardown = async () => {
  try {
    // Wait for all Mongoose connections to close
    await mongoose.connection.close();
  } catch (error) {
    console.error('Error closing MongoDB connection:', error);
  }

//   try {
//     // Stop and clean up the MongoDB in-memory server
//     await mongod.stop();
//   } catch (error) {
//     console.error('Error stopping MongoMemoryServer:', error);
//   }
// };



if (mongod  && mongod.isRunning) {
  try {
   
    await mongod.stop();
  } catch (error) {
    console.error('Error stopping MongoMemoryServer:', error);
  }
}
};

module.exports = { setup, teardown, mongod };