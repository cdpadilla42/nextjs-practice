import Habit from './habits';

export const habitsResolvers = {
  Query: {
    async habits() {
      try {
        const results = await Habit.find({}).exec();
        return results;
      } catch (err) {
        console.error(err);
      }
    },
  },
};
