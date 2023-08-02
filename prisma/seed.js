// prisma/seed.js

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seed() {
  try {
    await prisma.skill.createMany({
      data: [
        { skillName: "Skill 1" },
        { skillName: "Skill 2" },
        { skillName: "Skill 3" },
        // Add more skills as needed
      ],
      skipDuplicates: true,
    });

    await prisma.entry.createMany({
      data: [
        {
          title: "Entry 1",
          formattedDate: new Date(),
          text: "This is the first entry.",
          skills: {
            connect: [{ skillName: "Skill 1" }, { skillName: "Skill 2" }],
          },
        },
        {
          title: "Entry 2",
          formattedDate: new Date(),
          text: "This is the second entry.",
          skills: {
            connect: [{ skillName: "Skill 2" }, { skillName: "Skill 3" }],
          },
        },
        // Add more entries as needed
      ],
    });
  } catch (error) {
    console.error("Error seeding the database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
