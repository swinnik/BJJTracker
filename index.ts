import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create the user Alice and her first post (existing code)
  // await prisma.user.create({
  //   data: {
  //     name: "Bob",
  //     email: "bob@prisma.io",
  //     posts: {
  //       create: { title: "Hello World" },
  //     },
  //     profile: {
  //       create: { bio: "I like turtles" },
  //     },
  //   },
  // });

  // Get Alice's user record from the database
  const user = await prisma.user.findUnique({
    where: {
      email: "bob@prisma.io",
    },
  });

  if (!user) {
    throw new Error("User not found in the database.");
  }

  // Create a second post for Alice
  await prisma.post.create({
    data: {
      title: "Third  Post of Bob",
      content: "This is Alice's second post.",
      published: true,
      authorId: user.id,
    },
  });

  // Fetch all users (including posts and profiles) from the database
  const allUsers = await prisma.user.findMany({
    where: {
      email: "bob@prisma.io",
    },
    include: {
      posts: true,
      profile: true,
    },
  });

  console.dir(allUsers, { depth: null });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
