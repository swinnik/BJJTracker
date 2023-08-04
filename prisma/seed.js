const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function populateDatabase() {
  try {
    // Create skills
    const skill1 = await prisma.skill.create({
      data: { skillName: 'JavaScript' },
    });

    const skill2 = await prisma.skill.create({
      data: { skillName: 'React' },
    });

    const skill3 = await prisma.skill.create({
      data: { skillName: 'Node.js' },
    });

    // Create entries and associate skills with them
    const entry1 = await prisma.entry.create({
      data: {
        title: 'First Entry',
        formattedDate: new Date(),
        text: 'This is the first entry.',
        skills: { connect: [{ id: skill1.id }, { id: skill2.id }] },
      },
    });

    const entry2 = await prisma.entry.create({
      data: {
        title: 'Second Entry',
        formattedDate: new Date(),
        text: 'This is the second entry.',
        skills: { connect: [{ id: skill2.id }, { id: skill3.id }] },
      },
    });

    console.log('Database populated successfully.');
  } catch (error) {
    console.error('Error populating the database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

populateDatabase();
