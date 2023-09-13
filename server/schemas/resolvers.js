const { Recipe } = require("../models");

const resolvers = {
  Query: {
    recipe: async () => {
      return Recipe.find({});
    },
    matchups: async (parent, { name }) => {
      const params = _id ? { _id } : {};
      const response = axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=74db62d59a674bbc85356ed301f3b3e2&number=12&query=${name}`
      );
      return response;
    },
  },

};

module.exports = resolvers;
