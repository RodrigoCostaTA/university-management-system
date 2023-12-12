import basicAuth from 'express-basic-auth';
import dotenv from 'dotenv';

dotenv.config();

const users: { [key: string]: string } = {
    [process.env.BASIC_AUTH_USERNAME as string]: process.env.BASIC_AUTH_PASSWORD as string,
};
  
const basicAuthMiddleware = basicAuth({
  users,
  challenge: true, // Sends a 401 unauthorized response without the challenge first
  unauthorizedResponse: 'Unauthorized', // Message to show on unauthorized access
});

export default basicAuthMiddleware;