const request = require('supertest');
const jwt = require('jsonwebtoken');
const {app} = require('../server'); // Your Express app
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const { setup, teardown, mongod } = require('../testUtils')
const  authRoutes = require('../routes/auth');
const { isAdmin } = require('../routes/auth');
const { hasUserRole } = require('../routes/auth');





jest.mock('../registration')

// Mock your registration function from the authRoutes
const { registerUser } = require('../registration'); // Assuming you define registerUser in authRoutes


// Mock the registration logic
registerUser.mockResolvedValue({ statusCode: 201, message: 'Registration successful' });


describe('Authentication Routes', () => {



  beforeAll(async () => {
    jest.setTimeout(60000);
     setup()// Call the setup function from testUtils
    await teardown();
    const appReady = new Promise((resolve) => {
      const server = app.listen(0, () => {
        console.log('Server is listening on port ' + server.address().port);
        resolve(server);
      });
    });
    server = await appReady;
    app.use(authRoutes.router);

console.log('MongoDB connected');

  });

  afterAll(async () => {
    jest.setTimeout(5000)
    server.close();
    await teardown()// Call the teardown function from testUtils
  });

  

//Test that registers new user
  it('should register a new user', async () => {
    const response = await request(server)
      .post('/auth/register')
      .send({
        username: 'peterpan@example.com',
        password: 'passwordsecure',
        isAdmin: false,
      });
    expect(response.statusCode).toBe(201);
    expect(response.body.message).toBe('Registration successful');
  });

  
  describe('isAdmin Middleware', () => {
    it('should allow access for admin users', () => {
      // Create a mock request object with a valid admin token
      const req = {
        header: () => 'Bearer ' + jwt.sign({ role: 'admin' }, process.env.SECRET_KEY),
      };
  
      // Create mock response and next functions
      const res = {};
      const next = jest.fn();
  
      // Call the isAdmin middleware with the mock request, response, and next functions
      isAdmin(req, res, next);
  
      // Expect that the next function was called
      expect(next).toHaveBeenCalled();
    });
  
    it('should deny access for non-admin users', () => {
      // Create a mock request object with a valid user token (non-admin)
      const req = {
        header: () => 'Bearer ' + jwt.sign({ role: 'user' }, process.env.SECRET_KEY),
      };
  
      // Create mock response and next functions
      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };
      const next = jest.fn();
  
      // Call the isAdmin middleware with the mock request, response, and next functions
      isAdmin(req, res, next);
  
      // Expect that the status and json functions were called to deny access
      expect(res.status).toHaveBeenCalledWith(403);
      expect(res.json).toHaveBeenCalledWith({ message: 'Access forbidden' });
  
      // Expect that the next function was NOT called
      expect(next).not.toHaveBeenCalled();
    });
  });
  
  describe('hasUserRole Middleware', () => {
    it('should allow access for admin users', () => {
      // Create a mock request object with a valid admin token
      const req = {
        header: () => 'Bearer ' + jwt.sign({ role: 'admin' }, process.env.SECRET_KEY),
      };
  
      // Create mock response and next functions
      const res = {};
      const next = jest.fn();
  
      // Call the hasUserRole middleware with the mock request, response, and next functions
      hasUserRole(req, res, next);
  
      // Expect that the next function was called
      expect(next).toHaveBeenCalled();
    });
  
    it('should allow access for regular users', () => {
      // Create a mock request object with a valid user token
      const req = {
        header: () => 'Bearer ' + jwt.sign({ role: 'user' }, process.env.SECRET_KEY),
      };
  
      // Create mock response and next functions
      const res = {};
      const next = jest.fn();
  
      // Call the hasUserRole middleware with the mock request, response, and next functions
      hasUserRole(req, res, next);
  
      // Expect that the next function was called
      expect(next).toHaveBeenCalled();
    });
  
    it('should deny access for other roles', () => {
      // Create a mock request object with a valid token for a different role (e.g., 'manager')
      const req = {
        header: () => 'Bearer ' + jwt.sign({ role: 'manager' }, process.env.SECRET_KEY),
      };
  
      // Create mock response and next functions
      const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };
      const next = jest.fn();
  
      // Call the hasUserRole middleware with the mock request, response, and next functions
      hasUserRole(req, res, next);
  
      // Expect that the status and json functions were called to deny access
      expect(res.status).toHaveBeenCalledWith(403);
      expect(res.json).toHaveBeenCalledWith({ message: 'Access forbidden' });
  
      // Expect that the next function was NOT called
      expect(next).not.toHaveBeenCalled();
    });
  });
 
 
});




