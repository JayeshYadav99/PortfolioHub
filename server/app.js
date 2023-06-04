const express = require("express");

const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const axios = require("axios");
require("dotenv").config();
// Route to generate the RSS feed
app.use(express.static("/public"));
app.use(cors());

const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, dbOptions)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const experienceSchema = new mongoose.Schema({
  position: {
    type: String,
    required: false,
  },
  company: {
    type: String,
    required: false,
  },
  Experience: {
    type: String,
    required: false,
  },
  startDate: {
    type: Date,
    required: false,
  },
  endDate: {
    type: Date,
    required: false,
  },
});

const publicationSchema = new mongoose.Schema({
  position: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    enum: ["Blog Post", "Book", "Video", "Conference Talk"],
    required: false,
  },
});

const educationSchema = new mongoose.Schema({
  position: {
    type: String,
    required: false,
  },
  institution: {
    type: String,
    required: false,
  },
  degree: {
    type: String,
    required: false,
  },
  fieldOfStudy: {
    type: String,
    required: false,
  },
  startDate: {
    type: Date,
    required: false,
  },
  endDate: {
    type: Date,
    required: false,
  },
});

const certificateSchema = new mongoose.Schema({
  position: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
});

const volunteerSchema = new mongoose.Schema({
  position: {
    type: String,
    required: false,
  },
  organization: {
    type: String,
    required: false,
  },
  startDate: {
    type: Date,
    required: false,
  },
  endDate: {
    type: Date,
    required: false,
  },
});

const awardSchema = new mongoose.Schema({
  position: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
});

const githubSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  sub: {
    type: String,
    required: true,
  },
  updated_at: {
    type: String,
    required: true,
  },
});
const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: false,
  },
  Name: {
    type: String,
    required: false,
  },
  Introduction: {
    type: String,
    default: "",
  },
  experiences: [experienceSchema],
  publications: [publicationSchema],
  education: [educationSchema],
  certificates: [certificateSchema],
  volunteer: [volunteerSchema],
  awards: [awardSchema],
  github: [githubSchema],
  languages: {
    type: [String],
    required: false,
  },
  interests: {
    type: [String],
    required: false,
  },
  references: {
    type: [String],
    required: false,
  },
  journeys: [
    {
      name: {
        type: [String],
        required: false,
      },
      checkpoints: [
        {
          description: {
            type: String,
            required: false,
          },
          imageURL: {
            type: String,
            required: false,
          },
        },
      ],
    },
  ],
});

const GithubUser = mongoose.model("GithubUser", githubSchema);

const User = mongoose.model("User", userSchema);
const Experience = mongoose.model("Experience", experienceSchema);
const Publication = mongoose.model("Publication", publicationSchema);
const Education = mongoose.model("Education", educationSchema);
const Certificate = mongoose.model("Certificate", certificateSchema);
const Volunteer = mongoose.model("Volunteer", volunteerSchema);
const Award = mongoose.model("Award", awardSchema);

app.get("/portfolio/:userId", (req, res) => {
  const userId = req.params.userId;

  User.findOne({ userId })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      res.json(user);
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to retrieve user data" });
    });
});
app.post("/experience/:userId", (req, res) => {
  const userId = req.params.userId;

  console.log(req.body);
  User.findOneAndUpdate({ userId }, { $push: { experiences: req.body } })
    .then(() => {
      res.json({ message: "Experience added successfully" });
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to add experience" });
    });
});

app.post("/language/:userId", (req, res) => {
  const userId = req.params.userId;
  const languages = req.body.languages;
  console.log(req.body);
  User.findOneAndUpdate(
    { userId },
    { $push: { languages: { $each: languages } } }
  )
    .then(() => {
      res.json({ message: "Languages added successfully" });
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to add languages" });
    });
});

app.put("/portfolio/Name/:userId", (req, res) => {
  const userId = req.params.userId;
  const { Name } = req.body;

  User.findOneAndUpdate({ userId }, { Name })
    .then(() => {
      res.json({ message: "Name updated successfully" });
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to update the name" });
    });
});
app.put("/portfolio/Introduction/:userId", (req, res) => {
  const userId = req.params.userId;
  const { Introduction } = req.body;
  console.clear();
  console.log(Introduction);
  User.findOneAndUpdate({ userId }, { Introduction })
    .then(() => {
      res.json({ message: "Introduction updated successfully" });
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to update the name" });
    });
});
app.post("/education/:userId", (req, res) => {
  const userId = req.params.userId;

  console.log(req.body);
  User.findOneAndUpdate({ userId }, { $push: { education: req.body } })
    .then(() => {
      res.json({ message: "Education added successfully" });
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to add Experience" });
    });
});

app.post("/publication/:userId", (req, res) => {
  const userId = req.params.userId;

  console.log(req.body);
  User.findOneAndUpdate({ userId }, { $push: { publications: req.body } })
    .then(() => {
      res.json({ message: "Publication added successfully" });
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to add publication" });
    });
});

app.post("/portfolio", (req, res) => {
  const portfolioData = req.body;

  const portfolio = new User(portfolioData);

  portfolio
    .save()
    .then(() => {
      res.json({ message: "Portfolio information saved successfully" });
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to save portfolio information" });
    });
});

app.post("/journey/:userId", (req, res) => {
  const userId = req.params.userId;

  console.log(req.body);
  User.findOneAndUpdate({ userId }, { $push: { journeys: req.body } })
    .then(() => {
      res.json({ message: "journey added successfully" });
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to add journey" });
    });
});
app.post("/github/:userId", (req, res) => {
  const userId = req.params.userId;

  console.log(req.body);
  User.findOneAndUpdate({ userId }, { $push: { github: req.body } })
    .then(() => {
      res.json({ message: "github added successfully" });
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to add github" });
    });
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
