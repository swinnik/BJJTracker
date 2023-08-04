// routes/entries.js
const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const router = express.Router();

router.get("/", async (req, res) => {
  const entries = await prisma.entry.findMany();
  res.json(entries);
});

// Add more route handlers as needed

module.exports = router;
