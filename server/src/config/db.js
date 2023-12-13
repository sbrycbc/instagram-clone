const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'instagram_clone',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to the database successfully');
  } catch (error) {
    console.error(`Database connection error: ${error.message}`);
  }
};

module.exports = connectToDatabase;

