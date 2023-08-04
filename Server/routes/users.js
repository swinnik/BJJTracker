const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const usersRouter = express.Router();

// Route to get all users and their posts
usersRouter.get("/", async (req, res) => {
  try {
    const allUsers = await prisma.user.findMany({
      include: {
        posts: true,
      },
    });
    res.json(allUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to create a new user along with their posts
usersRouter.post("/", async (req, res) => {
  const { name, email, posts } = req.body;

  try {
    // Create the user with posts
    const userWithPosts = await prisma.user.create({
      data: {
        name,
        email,
        posts: {
          create: posts.map((post) => ({
            title: post.title,
            content: post.content,
          })),
        },
      },
      include: {
        posts: true,
      },
    });

    res.json(userWithPosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = usersRouter;
