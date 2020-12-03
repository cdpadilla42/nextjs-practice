import Habit from './habits';

export const habitsMutations = {
  Mutation: {
    async addHabit(_, { habit }) {
      console.log('add habit', habit);
      const newHabit = new Habit(habit);
      const result = await newHabit.save((err, newHabit) => {
        if (err) return console.error(err);
        return newHabit;
      });
      return result;
    },
  },
};
