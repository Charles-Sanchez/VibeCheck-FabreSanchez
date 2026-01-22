/**
 * VibeCheck API (CPE 411L)
 *
 * This server:
 * - runs on your computer (localhost)
 * - listens on a port (default: 3000)
 * - responds to browser requests (endpoints) using JSON
 */

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// CORS lets your frontend page call your backend API.
app.use(cors());

// This allows Express to read JSON bodies (used for POST requests).
app.use(express.json());

// Data pools (random picks). You can customize these.
const fortunes = [
  "Agay! Agay!",
  "Pera o Bayo!",
  "Pepito Manaloto!",
  "Ivovouch kita kay lord",
];

const jokes = [
  "ANIM PITO ANIM PITO ANIM PITO",
  "Ano sinabi ni Rizal nung binaril siya? Agayy! Agayy! *namatay",
  "Ako... Ako yung joke :<",
];

const vibeMap = {
  happy: { emoji: "😄", message: "Agay! Agay! walang pasok!" },
  tired: { emoji: "🥱", message: "Unli water sa Federizo" },
  stressed: { emoji: "😵‍💫", message: "AGAY! AGAY!" },
};

// Smash counter (stored in memory for now)
let smashes = 0;

// GET /api/fortune -> returns one random fortune
app.get("/api/fortune", (req, res) => {
  const pick = fortunes[Math.floor(Math.random() * fortunes.length)];
  res.json({ fortune: pick });
});

// GET /api/joke -> returns one random joke
app.get("/api/joke", (req, res) => {
  const pick = jokes[Math.floor(Math.random() * jokes.length)];
  res.json({ joke: pick });
});

// GET /api/vibe?mood=happy|tired|stressed
app.get("/api/vibe", (req, res) => {
  const mood = (req.query.mood || "").toLowerCase();
  const vibe = vibeMap[mood];

  if (!vibe) {
    return res.json({
      mood: mood || "unknown",
      emoji: "🤔",
      message: "Try mood=happy, tired, or stressed.",
    });
  }

  res.json({ mood, ...vibe });
});

// POST /api/smash -> increases counter and returns the updated value
app.post("/api/smash", (req, res) => {
  smashes += 1;
  res.json({ smashes });
});

// GET /api/smashes -> returns current counter
app.get("/api/smashes", (req, res) => {
  res.json({ smashes });
});

// GET /api/secret?code=411L -> hidden message if code is correct
app.get("/api/secret", (req, res) => {
  const code = req.query.code;

  if (code === "411L") {
    return res.json({ message: "🎉 ITLOG NI PACQUIAO: anong PAK ang mahilig tumalon? edi... tiPAKlong" });
  }

  res.status(403).json({ message: "Wala si pacquiao dito, nasa 411L" });
});

// Start server
app.listen(PORT, () => {
  console.log(`VibeCheck API running at http://localhost:${PORT}`);
});