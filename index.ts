import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// async function main() {
//   //   await prisma.user.create({
//   //     data: {
//   //       name: "Gertrude",
//   //       email: "Gertrude@prisma.io",
//   //       posts: {
//   //         create: { title: "Hello World" },
//   //       },
//   //       profile: {
//   //         create: { bio: "I like turtles" },
//   //       },
//   //     },
//   //   });

//   const allUsers = await prisma.user.findMany({
//     include: {
//       posts: true,
//       profile: true,
//     },
//   });
//   console.dir(allUsers, { depth: null });
// }
async function main() {
  const post = await prisma.user.update({
    where: { id: 4 },
    data: { published: true },
  });
  console.log(post);
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
