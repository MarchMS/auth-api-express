import dotenv from 'dotenv';
dotenv.config();
import request from 'supertest';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import app from '../../../app';

let mongoServer: MongoMemoryServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('Auth API', () => {
  const testUser = { email: 'test@example.com', password: '12345678' };

  it('should register a user', async () => {
    const res = await request(app).post('/users/register').send(testUser);
    expect(res.statusCode).toBe(201);
    expect(res.body.email).toBe(testUser.email);
  });

  it('should login the user', async () => {
    const res = await request(app).post('/users/login').send(testUser);
    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
  });
});