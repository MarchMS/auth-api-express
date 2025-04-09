import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from './user.model';

export const registerUserService = async (email: string, password: string) => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!emailRegex.test(email)) {
    throw new Error('Invalid email format');
  }
  if (password.length < 6) {
    throw new Error('Password must be at least 6 characters long');
  }
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('Email is already registered');
  }
  const hash = await bcrypt.hash(password, 10);
  const user = new User({ email, password: hash });
  await user.save();

  return { email: user.email, id: user._id };
};

export const loginUserService = async (email: string, password: string) => {
  const user = await User.findOne({ email });

  if (!user) throw new Error('Invalid credentials: no user');

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) throw new Error('Invalid credentials: wrong password');

  const token = jwt.sign({ sub: user._id }, process.env.JWT_SECRET!);
  return { token };
};

export const getAllUsersService = async () => {
  const users = await User.find().select('-password');
  return users;
};