// require('dotenv').config();
// // const express = require('express');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const User = require('./models/User'); // Make sure to adjust the import path
// const secretKey = process.env.SECRET_KEY

// // Function to handle user login
// const loginUser = async (username, password) => {
//   try {
//     console.log('Searching for user:', username);
//     // Find the user based on the username
//     const user = await User.findOne({ username });

//     if (!user) {
//       console.log('User not found:', username);
//       throw new Error('Invalid credentials');
//     }

//     // Compare the provided password with the hashed password in the database
//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//       throw new Error('Invalid credentials');
//     }
//     console.log('Password match');
//     console.log('User role:', user.role);
//     // If the password matches, generate and return a JWT token
//     const tokenPayload = { userId: user._id, role: user.role.toLowerCase() };
//     const token = jwt.sign(tokenPayload, secretKey, { expiresIn: '1h' });
//     console.log(token)
//     return {token };
//   } catch (error) {
//     console.error(error);
//     throw new Error('Login failed');
//   }
// };

// module.exports = {
//   loginUser,
// };
