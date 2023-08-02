// routes/skills.js
const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const router = express.Router();

router.get("/", async (req, res) => {
  const skills = await prisma.skill.findMany();
  res.json(skills);
});

// Add more route handlers as needed

module.exports = router;
