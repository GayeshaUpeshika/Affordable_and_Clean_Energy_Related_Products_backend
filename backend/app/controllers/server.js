const express = require("express");
const cors = require("cors");
const dbConfig = require("./app/config/db.config");

const app = express();
const ngrok = require('ngrok');

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
const Role = db.role;

db.mongoose
  .connect(dbConfig.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to Database.");
    try{
        initial();
    }catch(e){
        console.log(e)
    }
    
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Solar Energy Products!" });
});

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
app.use(require('./app/routes/participant.routes'));
app.use(require('./app/routes/paymentpost.routes'));
app.use(require('./app/routes/tutorialpost.routes'));
app.use(require('./app/routes/webinarpost.routes'));
app.use(require('./app/routes/question.routes'));
app.use(require('./app/routes/reply.routes'));


// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

ngrok.connect({
  proto : 'http',
  addr : process.env.PORT || 8081,
}, (err, url) => {
  if (err) {
      console.error('Error while connecting Ngrok',err);
      return new Error('Ngrok Failed');
  }
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "buyer"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'buyer' to roles collection");
      });

      new Role({
        name: "seller"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'seller' to roles collection");
      });

      new Role({
        name: "tutor"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'tutor' to roles collection");
      });

      new Role({
        name: "tech"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'tech' to roles collection");
      });
    }
  });
}