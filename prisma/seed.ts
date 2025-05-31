import { Prisma, PrismaClient } from '@/generated/prisma';
import { hashPassword } from '@/utils';

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    id: 'b8a62f9e-3f4f-4a3b-b02a-32c2986ad2fd',
    firstName: 'Sample',
    lastName: 'Manager One',
    email: 'manager_1@mail.com',
    role: 'manager',
    password: '88888888J',
    phoneNumber: '008801871675808',
    username: 'manager_one',
  },
  {
    id: '3f5a0d1d-8f27-4f79-9b57-18ce192b4e3c',
    firstName: 'Sample',
    lastName: 'User 1',
    email: 'user1@mail.com',
    role: 'tanent',
    password: '88888888J',
    username: 'user_1',
  },
  {
    id: '7e59c9c5-6bb1-4a1f-80f5-2d52e15c14c9',
    firstName: 'Sample',
    lastName: 'User 2',
    email: 'user2@mail.com',
    role: 'tanent',
    password: '88888888J',
    username: 'user_2',
  },
];

export async function main() {
  for (const u of userData) {
    const password = await hashPassword(u.password);
    await prisma.user.create({ data: { ...u, password: password } });
  }
}

main();
