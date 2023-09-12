const router = require("express").Router();
const axios = require("axios");
require("dotenv").config();

router.get("/searchedRecipies/:userInput", async (req, res) => {
  const response = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.API_KEY}&number=12&query=${req.params.userInput}`
  );
    res.status(200).json(response.data);
});

//     `https://www.googleapis.com/books/v1/volumes?q=${req.params.userInput}&key=${process.env.API_KEY}`
//   );
router.get("/popular", async (req, res) => {
  
  const response = await axios.get(
    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.API_KEY}&number=12`
  );
  res.status(200).json(response.data);
});


// router.get("/getGenre/:genre", async (req, res) => {
//   // const genre = 'thriller'
//   const response = await axios.get(
//     `https://www.googleapis.com/books/v1/volumes?q=genre:${req.params.genre}`
//   );
//   res.status(200).json(response.data);
// });

module.exports = router;
