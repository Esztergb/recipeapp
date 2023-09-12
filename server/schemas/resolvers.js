const { Recipe } = require("../models");

const resolvers = {
  Query: {
    tech: async () => {
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
//   Mutation: {
//     createMatchup: async (parent, args) => {
//       const matchup = await Matchup.create(args);
//       return matchup;
//     },
//     createVote: async (parent, { _id, techNum }) => {
//       const vote = await Matchup.findOneAndUpdate(
//         { _id },
//         { $inc: { [`tech${techNum}_votes`]: 1 } },
//         { new: true }
//       );
//       return vote;
//     },
//   },
};

module.exports = resolvers;
