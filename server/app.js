const express = require('express');

const mongoose = require('mongoose')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const axios =require('axios');
require('dotenv').config();
// Route to generate the RSS feed
app.use(express.static('/public'));
app.use(cors());

const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  
  };
  
  // Connect to MongoDB
  mongoose
    .connect(process.env.MONGO_URI, dbOptions)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
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

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: false,
    
  },
  experiences: [experienceSchema],
  publications: [publicationSchema],
  education: [educationSchema],
  certificates: [certificateSchema],
  volunteer: [volunteerSchema],
  awards: [awardSchema],
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
});

const User = mongoose.model('User', userSchema);
const Experience = mongoose.model('Experience', experienceSchema);
const Publication = mongoose.model('Publication', publicationSchema);
const Education = mongoose.model('Education', educationSchema);
const Certificate = mongoose.model('Certificate', certificateSchema);
const Volunteer = mongoose.model('Volunteer', volunteerSchema);
const Award = mongoose.model('Award', awardSchema);



app.get('/portfolio/:userId', (req, res) => {
    const userId = req.params.userId;
  
    User.findOne({ userId })
      .then((user) => {
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
  
        res.json(user);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Failed to retrieve user data' });
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
      
// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});