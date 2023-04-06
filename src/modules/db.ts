import { PrismaClient } from '@prisma/client';
import { nanoid } from 'nanoid';

const db = new PrismaClient({
	log: ['query', 'info', 'warn', 'error'],
});

export const generateId = () => nanoid(16);

export default db;
