import Habit from './habits';

export const habitsResolvers = {
  Query: {
    async habits() {
      const results = await Habit.find({}).exec();
      return results;
    },
  },
};
