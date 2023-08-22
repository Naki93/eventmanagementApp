// registration.js
const bcrypt = require('bcrypt');
const User = require('./models/User'); // Make sure to adjust the import path

const emailValidator = /^(?=.*[@])(?=.*[.com]$).*$/;

// Function to handle user registration
const registerUser = async (username, password, isAdmin) => {
  // Check if the password meets the length requirement
  if (password.length < 8) {
    throw new Error('Password must be at least 8 characters long');
  }

  // Validate email format (you may need to define emailValidator)
  if (!emailValidator.test(username)) {
    throw new Error('Invalid email format');
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create a new user document with the provided role
    const user = new User({
      username,
      password: hashedPassword,
      role: isAdmin ? 'admin' : 'user',
      isAdmin: isAdmin,
    });
    // Save the user document to the database
    await user.save();
    return { statusCode: 201, message: 'Registration successful' };
  } catch (error) {
    console.error(error);
    throw new Error('Registration failed');
  }
};

module.exports = {
  registerUser,
};
